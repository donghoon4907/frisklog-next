import { gql } from 'graphql-request';

export const MUTATION_CREATE_COMMENT = gql`
    mutation AddComment($content: String!, $postId: ID!) {
        addComment(input: { content: $content, postId: $postId }) {
            id
        }
    }
`;
