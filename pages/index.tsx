import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Aside } from '../components/layout/Aside';
import { Main } from '../components/layout/Main';
import { MainTitle } from '../components/layout/Main.style';
import { useAuthenticate } from '../hooks/use-authenticate';
import { wrapper } from '../store';
import { loginGithubRequest } from '../actions/user/login-github.action';
import { homePostsRequest } from '../actions/post/home-posts.action';
import { AppState } from '../reducers';
import { PostState } from '../reducers/post';
import { PostItem } from '../components/PostItem';

const Home: NextPage = () => {
    const dispatch = useDispatch();

    const { homePosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { validateToken } = useAuthenticate();

    useEffect(() => {
        const token = validateToken();

        if (token === null) {
            const url = new URL(window.location.href);

            const code = url.searchParams.get('code');

            if (code !== null) {
                dispatch(loginGithubRequest({ code }));
            }
        }
    }, []);

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
                    <h2>최신 포스트</h2>
                </MainTitle>
                {homePosts.map((post) => (
                    <PostItem key={`"homePost${post.id}`} {...post} />
                ))}
            </Main>
            <Aside></Aside>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ getState, dispatch, sagaTask }) =>
        async ({ req, res, ...etc }) => {
            const { post } = getState();

            if (post.homePosts.length === 0) {
                dispatch(
                    homePostsRequest({
                        limit: 12,
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
