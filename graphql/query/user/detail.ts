import { gql } from 'graphql-request';

/**
 * 사용자 상세 조회
 *
 */
export const GET_USER = gql`
    query GetUser($id: String!) {
        user(id: $id) {
            id
            nickname
            avatar
            link
            status
            statusText
            isMaster
            createdAt
            updatedAt
            followerCount
            postCount
        }
    }
`;
