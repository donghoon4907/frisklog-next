import { gql } from 'graphql-request';

export const MUTATION_UPDATE_USER = gql`
    mutation UpdateUser(
        $nickname: String
        $avatar: String
        $status: String
        $isKeep: Boolean
    ) {
        updateUser(
            input: {
                nickname: $nickname
                avatar: $avatar
                status: $status
                isKeep: $isKeep
            }
        ) {
            id
            nickname
            avatar
            isMaster
            status
            statusText
            isKeep
            token
        }
    }
`;
