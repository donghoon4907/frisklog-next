import { gql } from 'graphql-request';

/**
 * 연관 카테고리 검색
 *
 */
export const GET_RELATED_CATEGORIES = gql`
    query GetRelatedCategories($content: String!) {
        relatedCategories(content: $content) {
            content
            postCount
        }
    }
`;
