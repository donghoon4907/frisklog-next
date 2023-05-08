import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import type { AppState } from '../../reducers';
import type { PostState } from '../../reducers/post';
import { AsideLayout } from '../../components/layout/Aside';
import { MainLayout, MainTitle } from '../../components/layout/Main';
import { PostItem } from '../../components/template/PostItem';
import { wrapper } from '../../store';
import { ScrollList } from '../../components/ScrollList';
import { CategoryState } from '../../reducers/category';
import { LinkButton } from '../../components/button/Link';
import { relatedCategoriesRequest } from '../../actions/category/related-categories.action';
import { categoryPostsRequest } from '../../actions/post/category-posts.action';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';

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
                <title>Frisklog - 카테고리 검색</title>
            </Head>
            <Header />
            <Layout>
                <MainLayout>
                    <MainTitle>
                        <h2>{`#${category} 포스트 목록`}</h2>
                    </MainTitle>
                    <ScrollList
                        {...categoryPosts}
                        actionCreator={categoryPostsRequest}
                        Node={PostItem}
                        payload={{ category }}
                    />
                </MainLayout>
                <AsideLayout>
                    {relatedCategories.length > 0 && (
                        <>
                            <MainTitle>
                                <h2>{`#${category} 관련 카테고리`}</h2>
                            </MainTitle>
                            <ul>
                                {relatedCategories.map(
                                    ({ content, postCount }, idx) => (
                                        <LinkButton
                                            key={`relatedCategory${idx}`}
                                            text={`${content}(${postCount})`}
                                            href={`/category/${content}`}
                                            aria-label={`'${content}' 카테고리 검색`}
                                        />
                                    ),
                                )}
                            </ul>
                        </>
                    )}
                </AsideLayout>
            </Layout>
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

            try {
                await sagaTask?.toPromise();
            } catch (e) {
                res.statusCode = 302;

                res.setHeader('Location', '/404');
            }

            return {
                props: {
                    category,
                },
            };
        },
);

export default CategorySearch;
