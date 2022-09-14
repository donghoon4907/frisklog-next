import { gql } from 'graphql-request';

export const MUTATION_UNLIKE_POST = gql`
    mutation UnlikePost($id: String!) {
        unlike(id: $id)
    }
`;
