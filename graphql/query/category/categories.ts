import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_CATEGORY_FIELDS } from '../../fragment/category';
/**
 * 카테고리 검색
 *
 * @param $order         정렬
 * @param $searchKeyword 검색어
 */
export const GET_CATEGORIES = gql`
    ${CORE_CATEGORY_FIELDS}
    ${PAGING_META_FIELDS}
    query GetCategories($offset: Int, $limit: Int!, $searchKeyword: String) {
        categories(
            offset: $offset
            limit: $limit
            searchKeyword: $searchKeyword
        ) {
            nodes {
                ...CoreCategoryFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
