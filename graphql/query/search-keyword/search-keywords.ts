import { gql } from 'graphql-request';

import { CORE_SEARCH_KEYWORD_FIELDS } from '../../fragment/search-keyword';

/**
 * 인기 검색어 조회
 *
 */
export const GET_SEARCH_KEYWORDS = gql`
    ${CORE_SEARCH_KEYWORD_FIELDS}
    query GetSearchKeywords($offset: Int, $limit: Int!) {
        searchKeywords(offset: $offset, limit: $limit) {
            ...CoreSearchKeywordFields
            searchCount
        }
    }
`;
