import { gql } from 'graphql-request';

export const MUTATION_UNFOLLOW_USER = gql`
    mutation UnfollowUser($id: ID!) {
        unfollow(id: $id)
    }
`;
