import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 사용자 검색
 *
 * @param $nickname  별명
 * @param $order     정렬
 */
export const GET_USERS = gql`
    ${PAGING_META_FIELDS}
    query GetUsers(
        $offset: Int
        $limit: Int!
        $nickname: String
        $order: [[String]]
    ) {
        users(
            offset: $offset
            limit: $limit
            nickname: $nickname
            order: $order
        ) {
            nodes {
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

            pageInfo {
                ...PagingMetadataFields
            }
        }
    }
`;
