import { gql } from 'graphql-request';

export const MUTATION_FOLLOW_USER = gql`
    mutation FollowUser($id: ID!) {
        follow(id: $id)
    }
`;
