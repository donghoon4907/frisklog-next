import { gql } from 'graphql-request';

export const MUTATION_DELETE_COMMENT = gql`
    mutation DeleteComment($id: String!) {
        deleteComment(id: $id) {
            id
        }
    }
`;
