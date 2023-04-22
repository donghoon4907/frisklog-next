import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import type { User } from '../../interfaces/user';
import type { AppState } from '../../reducers';
import type { PostState } from '../../reducers/post';
import { AsideLayout } from '../../components/layout/Aside';
import { MainLayout, MainTitle } from '../../components/layout/Main';
import { wrapper } from '../../store';
import { AsideUserProfile } from '../../components/partitial/aside/UserProfile';
import { ScrollList } from '../../components/ScrollList';
import { removedPostsRequest } from '../../actions/post/removed-posts.action';
import { RemovedPostItem } from '../../components/template/PostItem';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { SetUserModal } from '../../components/modal/SetUser';
import { SetThumbnailModal } from '../../components/modal/SetThumbnail';

interface Props {
    me: Pick<User, 'id' | 'nickname' | 'avatar'>;
}

const RestorePost: NextPage<Props> = ({ me }) => {
    const { removedPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    return (
        <>
            <Head>
                <title>Frisklog - 삭제된 포스트</title>
            </Head>
            <Header />
            <Layout>
                <MainLayout>
                    <MainTitle>
                        <h2>삭제된 포스트</h2>
                    </MainTitle>
                    <ScrollList
                        {...removedPosts}
                        actionCreator={removedPostsRequest}
                        Node={RemovedPostItem}
                    />
                </MainLayout>
                <AsideLayout>
                    <MainTitle>
                        <h2>내 정보</h2>
                    </MainTitle>
                    <AsideUserProfile
                        user={{
                            ...me,
                            isFollowing: false,
                        }}
                    />
                </AsideLayout>
            </Layout>
            <SetUserModal />
            <SetThumbnailModal />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask, getState }) =>
        async ({ req, res, ...etc }) => {
            dispatch(
                removedPostsRequest({
                    limit: 12,
                }),
            );

            dispatch(END);

            await sagaTask?.toPromise();

            const state = getState();

            const { id, nickname, avatar } = state.user;

            if (id === null) {
                res.statusCode = 302;

                res.setHeader('Location', '/');
            }

            return {
                props: {
                    me: {
                        id,
                        nickname,
                        avatar,
                    },
                },
            };
        },
);

export default RestorePost;
