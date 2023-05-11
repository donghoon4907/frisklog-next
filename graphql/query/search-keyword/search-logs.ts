import { gql } from 'graphql-request';

import { CORE_SEARCH_KEYWORD_FIELDS } from '../../fragment/search-keyword';
import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 검색 이력 조회
 *
 */
export const GET_SEARCH_LOGS = gql`
    ${CORE_SEARCH_KEYWORD_FIELDS}
    ${PAGING_META_FIELDS}
    query GetSearchLogs($offset: Int, $limit: Int!) {
        searchLogs(offset: $offset, limit: $limit) {
            nodes {
                ...CoreSearchKeywordFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
