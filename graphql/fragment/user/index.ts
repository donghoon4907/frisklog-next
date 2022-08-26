import { gql } from 'graphql-request';

export const AUTH_USER_FIELDS = gql`
    fragment AuthUserFields on User {
        id
        nickname
        avatar
        isMaster
        token
    }
`;
