import { gql } from 'graphql-request';

import { AUTH_USER_FIELDS } from '../../fragment/user';

export const MUTATION_NAVER_LOGIN = gql`
    ${AUTH_USER_FIELDS}
    mutation NaverLogIn($code: String!) {
        naverLogIn(code: $code) {
            ...AuthUserFields
        }
    }
`;
