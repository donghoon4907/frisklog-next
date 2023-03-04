import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../../fragment/user';

export const MUTATION_CREATE_POST = gql`
    ${CORE_USER_FIELDS}
    mutation AddPost(
        $content: String!
        $categories: [String!]!
        $visibility: String!
    ) {
        addPost(
            input: {
                content: $content
                categories: $categories
                visibility: $visibility
            }
        ) {
            id
            content
            visibility
            createdAt
            likedCount

            user {
                ...CoreUserFields
            }

            categories {
                content
            }
        }
    }
`;
