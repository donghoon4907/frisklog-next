import { gql } from 'graphql-request';

export const MUTATION_UPDATE_COMMENT = gql`
    mutation UpdateComment($id: ID!, $content: String!) {
        updateComment(input: { id: $id, data: { content: $content } }) {
            id
        }
    }
`;
