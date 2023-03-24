import { gql } from 'graphql-request';

export const MUTATION_DELETE_PHOTO = gql`
    mutation DeletePhoto($id: String!) {
        deletePhoto(id: $id) {
            id
        }
    }
`;
