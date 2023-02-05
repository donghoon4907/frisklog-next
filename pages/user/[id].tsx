import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { userPostsRequest } from '../../actions/post/user-posts.action';
import { getUserRequest } from '../../actions/user/get-user.action';
import { Aside } from '../../components/layout/Aside';
import { Main } from '../../components/layout/Main';
import { MainTitle } from '../../components/layout/Main.style';
import { PostItem } from '../../components/PostItem';
import { AppState } from '../../reducers';
import { PostState } from '../../reducers/post';
import { wrapper } from '../../store';
import { AsideUserProfile } from '../../components/partitial/aside/UserProfile';
import { ScrollList } from '../../components/ScrollList';
import { UserState } from '../../reducers/user';
import { MyPosts } from '../../components/partitial/aside/MyPosts';

interface Props {
    userId: string;
}

const UserProfile: NextPage<Props> = ({ userId }) => {
    const { id, userPageProfile } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { userPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const isMe = id === userId;

    return (
        <>
            <Head>
                <title>Frisklog</title>
            </Head>
            <Main>
                <MainTitle>
                    <h2>모든 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...userPosts}
                    actionCreator={userPostsRequest}
                    Node={PostItem}
                    payload={{ userId }}
                />
            </Main>
            <Aside>
                <MainTitle>
                    <h2>{isMe ? '내 정보' : '사용자 정보'}</h2>
                </MainTitle>
                {userPageProfile && <AsideUserProfile user={userPageProfile} />}
                {isMe && <MyPosts />}
            </Aside>
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

            await sagaTask?.toPromise();

            return {
                props: {
                    userId,
                },
            };
        },
);

export default UserProfile;
