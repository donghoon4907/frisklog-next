import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import type { AppState } from '../../reducers';
import type { PostState } from '../../reducers/post';
import { followingPostsRequest } from '../../actions/post/following-posts.action';
import { getFollowingsRequest } from '../../actions/user/get-followings.action';
import { AsideLayout } from '../../components/layout/Aside';
import { MainLayout, MainTitle } from '../../components/layout/Main';
import { SearchFollowing } from '../../components/partitial/aside/SearchFollowing';
import { PostItem } from '../../components/template/PostItem';
import { ScrollList } from '../../components/ScrollList';
import { wrapper } from '../../store';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { SetPostModal } from '../../components/modal/SetPost';

const Follow: NextPage = () => {
    const { followingPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    return (
        <>
            <Head>
                <title>Frisklog - 팔로잉</title>
            </Head>
            <Header />
            <Layout>
                <MainLayout>
                    <MainTitle>
                        <h2>팔로잉 최신 포스트</h2>
                    </MainTitle>
                    <ScrollList
                        {...followingPosts}
                        actionCreator={followingPostsRequest}
                        Node={PostItem}
                    />
                </MainLayout>
                <AsideLayout>
                    <MainTitle>
                        <h2>팔로잉 목록</h2>
                    </MainTitle>
                    <SearchFollowing />
                </AsideLayout>
            </Layout>
            <SetPostModal />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const { userId, search } = query;

            // if (userId && typeof userId !== 'string') {
            //     res.statusCode = 302;

            //     res.setHeader('Location', '/404');
            // }

            dispatch(
                getFollowingsRequest({
                    limit: 5,
                    nickname: search as string | undefined,
                }),
            );

            dispatch(
                followingPostsRequest({
                    limit: 10,
                    userId: userId as string | undefined,
                }),
            );

            dispatch(END);

            await sagaTask?.toPromise();

            return {
                props: {},
            };
        },
);

export default Follow;
