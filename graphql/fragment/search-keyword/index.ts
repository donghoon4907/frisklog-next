import { gql } from 'graphql-request';

export const CORE_SEARCH_KEYWORD_FIELDS = gql`
    fragment CoreSearchKeywordFields on SearchKeyword {
        id
        keyword
    }
`;
