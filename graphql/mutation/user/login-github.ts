import { gql } from 'graphql-request';

import { AUTH_USER_FIELDS } from '../../fragment/user';

export const MUTATION_GITHUB_LOGIN = gql`
    ${AUTH_USER_FIELDS}
    mutation GithubLogIn($code: String!) {
        githubLogIn(code: $code) {
            ...AuthUserFields
        }
    }
`;
