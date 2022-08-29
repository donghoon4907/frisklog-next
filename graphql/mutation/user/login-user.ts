import { gql } from 'graphql-request';

export const MUTATION_LOGIN_USER = gql`
    mutation LogInUser($email: String!) {
        logIn(email: $email)
    }
`;
