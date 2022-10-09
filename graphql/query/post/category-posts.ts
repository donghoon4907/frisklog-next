import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

/**
 * 게시물 카테고리 검색
 *
 * @param $order    정렬
 * @param $category 카테고리
 */
export const GET_CATEGORY_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetCategoryPosts($offset: Int, $limit: Int!, $category: String!) {
        categoryPosts(offset: $offset, limit: $limit, category: $category) {
            nodes {
                ...PostItemFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
