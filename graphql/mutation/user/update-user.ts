import { gql } from 'graphql-request';

import { AUTH_USER_FIELDS } from '../../fragment/user';

export const MUTATION_UPDATE_USER = gql`
    ${AUTH_USER_FIELDS}
    mutation UpdateUser($nickname: String, $avatar: String, $status: String) {
        updateUser(
            input: { nickname: $nickname, avatar: $avatar, status: $status }
        ) {
            ...AuthUserFields
        }
    }
`;
