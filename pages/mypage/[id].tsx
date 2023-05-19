import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import type { AppState } from '../../reducers';
import type { PostState } from '../../reducers/post';
import type { UserState } from '../../reducers/user';
import { userPostsRequest } from '../../actions/post/user-posts.action';
import { getUserRequest } from '../../actions/user/get-user.action';
import { AsideLayout } from '../../components/layout/Aside';
import { MainLayout, MainTitle } from '../../components/layout/Main';
import { PostItem } from '../../components/template/PostItem';
import { wrapper } from '../../store';
import { AsideUserProfile } from '../../components/partitial/aside/UserProfile';
import { ScrollList } from '../../components/ScrollList';
import { MyPosts } from '../../components/partitial/aside/MyPosts';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { SetUserModal } from '../../components/modal/SetUser';
import { SetThumbnailModal } from '../../components/modal/SetThumbnail';
import { SetPostModal } from '../../components/modal/SetPost';

interface Props {
    userId: string;
}

const MyPage: NextPage<Props> = ({ userId }) => {
    const { id, nickname, avatar } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { userPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    return (
        <>
            <Head>
                <title>Frisklog</title>
            </Head>
            <Header />
            <Layout>
                <MainLayout>
                    <MainTitle>
                        <h2>모든 포스트</h2>
                    </MainTitle>
                    <ScrollList
                        {...userPosts}
                        actionCreator={userPostsRequest}
                        Node={PostItem}
                        payload={{ userId }}
                    />
                </MainLayout>
                <AsideLayout>
                    <MainTitle>
                        <h2>내 정보</h2>
                    </MainTitle>
                    <AsideUserProfile
                        user={{
                            id: id!,
                            nickname: nickname!,
                            avatar: avatar!,
                            isFollowing: false,
                        }}
                    />
                    <MyPosts />
                </AsideLayout>
            </Layout>
            <SetPostModal />
            <SetUserModal />
            <SetThumbnailModal />
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const userId = query.id as string;

            dispatch(
                getUserRequest({
                    id: userId,
                }),
            );

            dispatch(
                userPostsRequest({
                    limit: 12,
                    userId,
                }),
            );

            dispatch(END);

            try {
                await sagaTask?.toPromise();
            } catch (e) {
                res.statusCode = 302;

                res.setHeader('Location', '/404');
            }

            return {
                props: {
                    userId,
                },
            };
        },
);

export default MyPage;
