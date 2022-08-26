import { gql } from 'graphql-request';

export const MUTATION_CREATE_USER = gql`
    mutation AddUser($email: String!, $nickname: String!, $avatar: String) {
        addUser(
            input: { email: $email, nickname: $nickname, avatar: $avatar }
        ) {
            id
            nickname
            avatar
        }
    }
`;
