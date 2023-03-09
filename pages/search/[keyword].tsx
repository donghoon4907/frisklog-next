import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Aside } from '../../components/layout/Aside';
import { Main } from '../../components/layout/Main';
import { MainTitle } from '../../components/layout/Main.style';
import { PostItem } from '../../components/PostItem';
import { AppState } from '../../reducers';
import { wrapper } from '../../store';
import { ScrollList } from '../../components/ScrollList';
import { searchPostsRequest } from '../../actions/post/search-posts.action';
import { CategoryState } from '../../reducers/category';
import { LinkCategoryButton } from '../../components/button/LinkCategory';
import { PostState } from '../../reducers/post';
import { searchUsersRequest } from '../../actions/user/search-users.action';
import { UserState } from '../../reducers/user';
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
            <Main>
                <MainTitle>
                    <h2>{`"${searchKeyword}" 포스트 검색결과`}</h2>
                </MainTitle>
                <ScrollList
                    {...searchPosts}
                    actionCreator={searchPostsRequest}
                    Node={PostItem}
                    payload={{ searchKeyword }}
                />
            </Main>
            <Aside>
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
            </Aside>
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
