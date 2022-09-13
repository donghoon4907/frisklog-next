import { gql } from 'graphql-request';

export const MUTATION_DELETE_POST = gql`
    mutation DeletePost($id: String!) {
        deletePost(id: $id) {
            id
        }
    }
`;
