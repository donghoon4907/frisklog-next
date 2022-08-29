import { gql } from 'graphql-request';

export const MUTATION_GITHUB_LOGIN = gql`
    mutation GithubLogIn($code: String!) {
        githubLogIn(code: $code) {
            id
            nickname
            avatar
            isMaster
            token
        }
    }
`;
