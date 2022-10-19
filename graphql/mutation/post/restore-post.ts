import { gql } from 'graphql-request';

export const MUTATION_RESTORE_POST = gql`
    mutation RestorePost($id: String!) {
        restorePost(id: $id) {
            id
        }
    }
`;
