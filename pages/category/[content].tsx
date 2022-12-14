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
import { relatedCategoriesRequest } from '../../actions/category/related-categories.action';
import { categoryPostsRequest } from '../../actions/post/category-posts.action';

interface Props {
    category: string;
}

const CategorySearch: NextPage<Props> = ({ category }) => {
    const { categoryPosts } = useSelector<AppState, PostState>(
        (state) => state.post,
    );

    const { relatedCategories } = useSelector<AppState, CategoryState>(
        (state) => state.category,
    );

    return (
        <>
            <Head>
                <title>카테고리 검색 결과</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <MainTitle>
                    <h2>{`#${category} 포스트 목록`}</h2>
                </MainTitle>
                <ScrollList
                    {...categoryPosts}
                    actionCreator={searchPostsRequest}
                    Node={PostItem}
                    payload={{ category }}
                />
            </Main>
            <Aside>
                {relatedCategories.length > 0 && (
                    <>
                        <MainTitle>
                            <h2>{`#${category} 관련 카테고리`}</h2>
                        </MainTitle>
                        <ul>
                            {relatedCategories.map(
                                ({ content, postCount }, idx) => (
                                    <LinkCategoryButton
                                        key={`relatedCategory${idx}`}
                                        category={content}
                                        postCount={postCount}
                                    />
                                ),
                            )}
                        </ul>
                    </>
                )}
            </Aside>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, sagaTask }) =>
        async ({ req, res, query, ...etc }) => {
            const category = query.content as string;

            dispatch(
                categoryPostsRequest({
                    limit: 12,
                    category,
                }),
            );

            dispatch(
                relatedCategoriesRequest({
                    content: category,
                }),
            );

            dispatch(END);

            await sagaTask?.toPromise();

            return {
                props: {
                    category,
                },
            };
        },
);

export default CategorySearch;
