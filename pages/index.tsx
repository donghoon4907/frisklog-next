import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Aside } from '../components/layout/Aside';
import { Main } from '../components/layout/Main';
import { MainTitle } from '../components/layout/Main.style';
import { wrapper } from '../store';
import { loginGithubRequest } from '../actions/user/login-github.action';
import { homePostsRequest } from '../actions/post/home-posts.action';
import { AppState } from '../reducers';
import { PostState } from '../reducers/post';
import { PostItem } from '../components/PostItem';
import { recommendUsersRequest } from '../actions/user/recommend-users.action';
import { Slick } from '../components/Slick';
import { UserState } from '../reducers/user';
import { UserItem } from '../components/UserItem';
import { recommendCategoriesRequest } from '../actions/category/recommend-categories.action';
import { CategoryState } from '../reducers/category';
import { LinkCategoryButton } from '../components/button/LinkCategory';
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { ScrollList } from '../components/ScrollList';
import { ServerCookie } from '../lib/cookie/cookie.server';

const Home: NextPage = () => {
    const { homePosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { recommendUsers } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { recommendCategories } = useSelector<AppState, CategoryState>(
        (state) => state.category,
    );

    return (
        <>
            <Head>
                <title>Feed</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <MainTitle>
                    <h2>최신 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...homePosts}
                    actionCreator={homePostsRequest}
                    Node={PostItem}
                />
            </Main>
            <Aside>
                <MainTitle>
                    <h2>추천 카테고리</h2>
                </MainTitle>
                <ul>
                    {recommendCategories.map(({ id, content, postCount }) => (
                        <LinkCategoryButton
                            key={`recommendCategory${id}`}
                            category={content}
                            postCount={postCount}
                        />
                    ))}
                </ul>
                <MainTitle>
                    <h2>추천인</h2>
                </MainTitle>
                <Slick>
                    {recommendUsers.map((user) => (
                        <UserItem key={`recommendUser${user.id}`} {...user} />
                    ))}
                </Slick>
            </Aside>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ getState, dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const { code } = query;

            const { user, post, category } = getState();

            if (typeof code === 'string') {
                dispatch(
                    loginGithubRequest({
                        code,
                        callbackFunc: (token: string) => {
                            const cookies = new ServerCookie(req, res);

                            cookies.setCookie(COOKIE_TOKEN_KEY, token);

                            res.statusCode = 302;

                            res.setHeader('Location', '/');
                        },
                    }),
                );
            } else {
                if (post.homePosts.pageInfo === null) {
                    dispatch(
                        homePostsRequest({
                            limit: 12,
                        }),
                    );
                }

                if (user.recommendUsers.length === 0) {
                    dispatch(
                        recommendUsersRequest({
                            limit: 5,
                        }),
                    );
                }

                if (category.recommendCategories.length === 0) {
                    dispatch(
                        recommendCategoriesRequest({
                            limit: 5,
                        }),
                    );
                }
            }

            dispatch(END);

            await sagaTask?.toPromise();

            return {
                props: {},
            };
        },
);

export default Home;
