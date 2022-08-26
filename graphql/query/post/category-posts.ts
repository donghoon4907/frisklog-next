import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 게시물 카테고리 검색
 *
 * @param $order    정렬
 * @param $category 카테고리
 */
export const GET_CATEGORY_POSTS = gql`
    ${PAGING_META_FIELDS}
    query GetCategoryPosts(
        $offset: Int
        $limit: Int!
        $category: String!
        $order: [[String]]
    ) {
        categoryPosts(
            offset: $offset
            limit: $limit
            category: $category
            order: $order
        ) {
            nodes {
                id
                content
                link
                createdAt
                updatedAt
                likeCount
                commentCount

                user {
                    id
                    nickname
                    avatar
                    link
                    status
                    statusText
                }
            }

            pageInfo {
                ...PagingMetadataFields
            }
        }
    }
`;
