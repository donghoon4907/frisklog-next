import { gql } from 'graphql-request';

import { AUTH_USER_FIELDS } from '../../fragment/user';

export const MUTATION_GOOGLE_LOGIN = gql`
    ${AUTH_USER_FIELDS}
    mutation GoogleLogIn($token: String!) {
        googleLogIn(token: $token) {
            ...AuthUserFields
        }
    }
`;
