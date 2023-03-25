import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import Slider from 'react-slick';

import type { AppState } from '../reducers';
import type { PostState } from '../reducers/post';
import type { UserState } from '../reducers/user';
import { Aside } from '../components/layout/Aside';
import { Main } from '../components/layout/Main';
import { MainTitle } from '../components/layout/Main.style';
import { wrapper } from '../store';
import { loginGithubRequest } from '../actions/user/login-github.action';
import { homePostsRequest } from '../actions/post/home-posts.action';
import { PostItem } from '../components/template/PostItem';
import { recommendUsersRequest } from '../actions/user/recommend-users.action';
import { PrevArrow, NextArrow } from '../components/Slick';
import { UserItem } from '../components/template/UserItem';
import { recommendCategoriesRequest } from '../actions/category/recommend-categories.action';
import { CategoryState } from '../reducers/category';
import { LinkCategoryButton } from '../components/button/LinkCategory';
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { ScrollList } from '../components/ScrollList';
import { ServerCookie } from '../lib/cookie/cookie.server';
import { PostVisibility } from '../types/visibility';

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
                <title>Frisklog</title>
            </Head>
            <Main>
                <MainTitle>
                    <h2>최신 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...homePosts}
                    actionCreator={homePostsRequest}
                    Node={PostItem}
                    payload={{ visibility: PostVisibility.PUBLIC }}
                />
            </Main>
            <Aside>
                {recommendCategories.length > 0 && (
                    <>
                        <MainTitle>
                            <h2>추천 카테고리</h2>
                        </MainTitle>
                        <ul>
                            {recommendCategories.map(
                                ({ id, content, postCount }) => (
                                    <LinkCategoryButton
                                        key={`recommendCategory${id}`}
                                        category={content}
                                        postCount={postCount}
                                    />
                                ),
                            )}
                        </ul>
                    </>
                )}
                {recommendUsers.length > 0 && (
                    <>
                        <MainTitle>
                            <h2>추천인</h2>
                        </MainTitle>
                        <div style={{ marginBottom: 30 }}>
                            <Slider
                                className=""
                                dots
                                infinite
                                prevArrow={<PrevArrow />}
                                nextArrow={<NextArrow />}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                // centerMode: true,
                                autoplay
                                autoplaySpeed={5000}
                            >
                                {recommendUsers.map((user) => (
                                    <UserItem
                                        key={`recommendUser${user.id}`}
                                        {...user}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </>
                )}
            </Aside>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ getState, dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const { code } = query;

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
                dispatch(
                    homePostsRequest({
                        limit: 12,
                        visibility: PostVisibility.PUBLIC,
                    }),
                );

                dispatch(
                    recommendUsersRequest({
                        limit: 5,
                    }),
                );

                dispatch(
                    recommendCategoriesRequest({
                        limit: 5,
                    }),
                );
            }

            dispatch(END);

            await sagaTask?.toPromise();

            return {
                props: {},
            };
        },
);

export default Home;
