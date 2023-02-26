import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Aside } from '../../components/layout/Aside';
import { Main } from '../../components/layout/Main';
import { MainTitle } from '../../components/layout/Main.style';
import { AppState } from '../../reducers';
import { PostState } from '../../reducers/post';
import { wrapper } from '../../store';
import { AsideUserProfile } from '../../components/partitial/aside/UserProfile';
import { ScrollList } from '../../components/ScrollList';
import { User } from '../../interfaces/user';
import { likedPostsRequest } from '../../actions/post/liked-posts.action';
import { PostItem } from '../../components/PostItem';

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
            <Main>
                <MainTitle>
                    <h2>좋아요한 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...likedPosts}
                    actionCreator={likedPostsRequest}
                    Node={PostItem}
                />
            </Main>
            <Aside>
                <MainTitle>
                    <h2>내 정보</h2>
                </MainTitle>
                <AsideUserProfile
                    user={{
                        ...me,
                        isFollowing: false,
                    }}
                />
            </Aside>
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
