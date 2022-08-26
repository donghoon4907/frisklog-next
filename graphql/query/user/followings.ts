import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 팔로잉 검색
 *
 * @param $order 정렬
 */
export const GET_FOLLOWINGS = gql`
    ${PAGING_META_FIELDS}
    query GetFollowings($offset: Int, $limit: Int!, $order: [[String]]) {
        followings(offset: $offset, limit: $limit, order: $order) {
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
