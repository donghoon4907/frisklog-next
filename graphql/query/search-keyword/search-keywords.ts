import { gql } from 'graphql-request';

/**
 * 인기 검색어 조회
 *
 */
export const GET_SEARCH_KEYWORDS = gql`
    query GetSearchKeywords($offset: Int, $limit: Int!) {
        searchKeywords(offset: $offset, limit: $limit) {
            id
            keyword
            searchCount
        }
    }
`;
