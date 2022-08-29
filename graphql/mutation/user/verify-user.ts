import { gql } from 'graphql-request';

export const MUTATION_VERIFY_USER = gql`
    mutation VerifyUser($email: String!, $isKeep: Boolean!, $captcha: String!) {
        verify(input: { email: $email, isKeep: $isKeep, captcha: $captcha }) {
            id
            nickname
            avatar
            isMaster
            token
        }
    }
`;
