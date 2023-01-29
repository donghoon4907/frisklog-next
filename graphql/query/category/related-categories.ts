import { gql } from 'graphql-request';

import { CORE_CATEGORY_FIELDS } from '../../fragment/category';

/**
 * 연관 카테고리 검색
 *
 */
export const GET_RELATED_CATEGORIES = gql`
    ${CORE_CATEGORY_FIELDS}
    query GetRelatedCategories($content: String!) {
        relatedCategories(content: $content) {
            ...CoreCategoryFields
        }
    }
`;
