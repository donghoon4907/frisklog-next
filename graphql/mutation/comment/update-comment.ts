import { gql } from 'graphql-request';

export const MUTATION_UPDATE_COMMENT = gql`
    mutation UpdateComment($id: String!, $content: String!) {
        updateComment(input: { id: $id, data: { content: $content } }) {
            id
            content
            createdAt
            updatedAt

            user {
                id
                nickname
                avatar
                link
                status
                statusText
            }
        }
    }
`;
