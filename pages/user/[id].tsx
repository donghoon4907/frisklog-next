import type { NextPage } from 'next';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { userPostsRequest } from '../../actions/post/user-posts.action';
import { getUserRequest } from '../../actions/user/get-user.action';
import { Aside } from '../../components/layout/Aside';
import { Main } from '../../components/layout/Main';
import { MainTitle } from '../../components/layout/Main.style';
import { PostItem } from '../../components/PostItem';
import { AppState } from '../../reducers';
import { PostState } from '../../reducers/post';
import { UserState } from '../../reducers/user';

import { wrapper } from '../../store';

const UserProfile: NextPage = () => {
    const { userPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { userPageProfile } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <MainTitle>
                    <h2>모든 포스트</h2>
                </MainTitle>
                {userPosts.nodes.map((post) => (
                    <PostItem key={`"userPost${post.id}`} {...post} />
                ))}
            </Main>
            <Aside></Aside>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            try {
                if (!query.id) {
                    throw new Error(
                        '[Next] access denied in userPage:getServerSideProps',
                    );
                }

                const id = query.id as string;

                dispatch(
                    getUserRequest({
                        id,
                    }),
                );

                dispatch(
                    userPostsRequest({
                        limit: 10,
                        userId: id,
                    }),
                );

                dispatch(END);

                await sagaTask?.toPromise();
            } catch (e) {
                console.log((e as Error).message);

                res.statusCode = 302;

                res.setHeader('Location', '/');
            }

            return {
                props: {},
            };
        },
);

export default UserProfile;
