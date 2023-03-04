import { gql } from 'graphql-request';

export const MUTATION_UPDATE_POST = gql`
    mutation UpdatePost(
        $id: String!
        $content: String!
        $categories: [String!]!
        $visibility: String!
    ) {
        updatePost(
            input: {
                id: $id
                data: {
                    content: $content
                    categories: $categories
                    visibility: $visibility
                }
            }
        ) {
            id
            content

            categories {
                content
            }
        }
    }
`;
