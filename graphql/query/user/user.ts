import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../../fragment/user';

/**
 * 사용자 상세 조회
 *
 */
export const GET_USER = gql`
    ${CORE_USER_FIELDS}
    query GetUser($id: String!) {
        user(id: $id) {
            ...CoreUserFields

            isFollowing
            isMe
        }
    }
`;
