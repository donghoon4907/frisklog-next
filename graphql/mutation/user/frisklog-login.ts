import { gql } from 'graphql-request';

export const MUTATION_FRISKLOG_LOGIN = gql`
    mutation FrisklogLogIn($email: String!) {
        logIn(email: $email)
    }
`;
