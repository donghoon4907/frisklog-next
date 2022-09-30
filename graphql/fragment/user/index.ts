import { gql } from 'graphql-request';

export const CORE_USER_FIELDS = gql`
    fragment CoreUserFields on User {
        id
        nickname
        avatar
        link
        status
        statusText
    }
`;

export const AUTH_USER_FIELDS = gql`
    ${CORE_USER_FIELDS}
    fragment AuthUserFields on User {
        id
        nickname
        avatar
        isMaster
        token

        followings {
            ...CoreUserFields
        }
    }
`;
