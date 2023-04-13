import { gql } from 'graphql-request';

export const MUTATION_SEND_EMAIL = gql`
    mutation SendEmail($email: String!, $captcha: String!) {
        sendEmail(input: { email: $email, captcha: $captcha })
    }
`;
