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
import { likedPostsRequest } from '../../actions/post/liked-posts.action';
import { PostItem } from '../../components/template/PostItem';

interface Props {
    me: Pick<User, 'id' | 'nickname' | 'avatar'>;
}

const LikePost: NextPage<Props> = ({ me }) => {
    const { likedPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    return (
        <>
            <Head>
                <title>Frisklog - 좋아요한 포스트</title>
            </Head>
            <MainLayout>
                <MainTitle>
                    <h2>좋아요한 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...likedPosts}
                    actionCreator={likedPostsRequest}
                    Node={PostItem}
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
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask, getState }) =>
        async ({ req, res, ...etc }) => {
            dispatch(
                likedPostsRequest({
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

export default LikePost;
