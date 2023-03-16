import { gql } from 'graphql-request';

export const CORE_PHOTO_FIELDS = gql`
    fragment CorePhotoFields on Photo {
        id
        src
        type
        createdAt
    }
`;
