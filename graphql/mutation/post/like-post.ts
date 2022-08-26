import { gql } from 'graphql-request';

export const MUTATION_LIKE_POST = gql`
    mutation LikePost($id: ID!) {
        like(id: $id)
    }
`;
