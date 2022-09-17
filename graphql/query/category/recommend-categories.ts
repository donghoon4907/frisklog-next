import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 추천 카테고리 검색
 *
 */
export const GET_RECOMMEND_CATEGORIES = gql`
    ${PAGING_META_FIELDS}
    query GetRecommendCategories($offset: Int, $limit: Int!) {
        recommendCategories(offset: $offset, limit: $limit) {
            nodes {
                id
                content
                postCount
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
