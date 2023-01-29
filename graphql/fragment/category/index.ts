import { gql } from 'graphql-request';

export const CORE_CATEGORY_FIELDS = gql`
    fragment CoreCategoryFields on Category {
        id
        content
        postCount
    }
`;
