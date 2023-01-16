import { gql } from 'graphql-request';

export const CORE_USER_FIELDS = gql`
    fragment CoreUserFields on User {
        id
        nickname
        avatar
        status
        statusText
        isFollowing
    }
`;

export const AUTH_USER_FIELDS = gql`
    fragment AuthUserFields on User {
        id
        nickname
        avatar
        token
    }
`;
