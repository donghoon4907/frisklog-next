import { gql } from 'graphql-request';

export const MUTATION_UPDATE_POST = gql`
    mutation UpdatePost($id: ID!, $content: String!, $categories: [String]) {
        updatePost(
            input: {
                id: $id
                data: { content: $content, categories: $categories }
            }
        ) {
            id
        }
    }
`;
