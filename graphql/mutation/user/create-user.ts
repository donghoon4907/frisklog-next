import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../../fragment/user';

export const MUTATION_CREATE_USER = gql`
    ${CORE_USER_FIELDS}
    mutation AddUser($email: String!, $nickname: String!, $avatar: String) {
        addUser(
            input: { email: $email, nickname: $nickname, avatar: $avatar }
        ) {
            ...CoreUserFields
        }
    }
`;
