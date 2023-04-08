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
import { PostVisibility } from '../../types/visibility';

interface Props {
    userId: string;
}

const UserProfile: NextPage<Props> = ({ userId }) => {
    const { userPageProfile } = useSelector<AppState, UserState>(
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
            <MainLayout>
                <MainTitle>
                    <h2>모든 포스트</h2>
                </MainTitle>
                <ScrollList
                    {...userPosts}
                    actionCreator={userPostsRequest}
                    Node={PostItem}
                    payload={{ userId, visibility: PostVisibility.PUBLIC }}
                />
            </MainLayout>
            <AsideLayout>
                <MainTitle>
                    <h2>사용자 정보</h2>
                </MainTitle>
                {userPageProfile && <AsideUserProfile user={userPageProfile} />}
            </AsideLayout>
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
                    visibility: PostVisibility.PUBLIC,
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
