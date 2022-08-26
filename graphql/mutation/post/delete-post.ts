import { gql } from 'graphql-request';

export const MUTATION_DELETE_POST = gql`
    mutation DeletePost($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }
`;
