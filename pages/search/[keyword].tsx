import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import type { AppState } from '../../reducers';
import type { PostState } from '../../reducers/post';
import type { UserState } from '../../reducers/user';
import { AsideLayout } from '../../components/layout/Aside';
import { MainLayout, MainTitle } from '../../components/layout/Main';
import { PostItem } from '../../components/template/PostItem';
import { wrapper } from '../../store';
import { ScrollList } from '../../components/ScrollList';
import { searchPostsRequest } from '../../actions/post/search-posts.action';
import { CategoryState } from '../../reducers/category';
import { LinkCategoryButton } from '../../components/button/LinkCategory';
import { searchUsersRequest } from '../../actions/user/search-users.action';
import { AsideUserProfile } from '../../components/partitial/aside/UserProfile';
import { searchCategoriesRequest } from '../../actions/category/search-categories.action';
import { NotFoundCategory } from '../../components/NotFoundCategory';
import { PostVisibility } from '../../types/visibility';

interface Props {
    searchKeyword: string;
}

const Search: NextPage<Props> = ({ searchKeyword }) => {
    const { searchUsers } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { searchPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { searchCategories } = useSelector<AppState, CategoryState>(
        (state) => state.category,
    );

    return (
        <>
            <Head>
                <title>Frisklog - 검색 결과</title>
            </Head>
            <MainLayout>
                <MainTitle>
                    <h2>{`"${searchKeyword}" 포스트 검색결과`}</h2>
                </MainTitle>
                <ScrollList
                    {...searchPosts}
                    actionCreator={searchPostsRequest}
                    Node={PostItem}
                    payload={{
                        searchKeyword,
                        visibility: PostVisibility.PUBLIC,
                    }}
                />
            </MainLayout>
            <AsideLayout>
                <>
                    <MainTitle>
                        <h2>{`"${searchKeyword}" 카테고리 검색결과`}</h2>
                    </MainTitle>
                    <ul>
                        {searchCategories.length === 0 && <NotFoundCategory />}
                        {searchCategories.map(({ content, postCount }, idx) => (
                            <LinkCategoryButton
                                key={`Category${idx}`}
                                category={content}
                                postCount={postCount}
                            />
                        ))}
                    </ul>
                </>

                {searchUsers.nodes.length > 0 && (
                    <>
                        <MainTitle>
                            <h2>{`"${searchKeyword}" 사용자 검색결과`}</h2>
                        </MainTitle>
                        <AsideUserProfile user={searchUsers.nodes[0]} />
                    </>
                )}
            </AsideLayout>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const searchKeyword = query.keyword as string;

            dispatch(
                searchPostsRequest({
                    limit: 12,
                    searchKeyword,
                    visibility: PostVisibility.PUBLIC,
                }),
            );

            dispatch(
                searchUsersRequest({
                    limit: 1,
                    nickname: searchKeyword,
                }),
            );

            dispatch(
                searchCategoriesRequest({
                    limit: 5,
                    searchKeyword,
                }),
            );

            dispatch(END);

            await sagaTask?.toPromise();

            return {
                props: {
                    searchKeyword,
                },
            };
        },
);

export default Search;
