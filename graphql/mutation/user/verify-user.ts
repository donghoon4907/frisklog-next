import { gql } from 'graphql-request';

import { AUTH_USER_FIELDS } from '../../fragment/user';

export const MUTATION_VERIFY_USER = gql`
    ${AUTH_USER_FIELDS}
    mutation VerifyUser($email: String!, $isKeep: Boolean!, $captcha: String!) {
        verify(input: { email: $email, isKeep: $isKeep, captcha: $captcha }) {
            ...AuthUserFields
        }
    }
`;
