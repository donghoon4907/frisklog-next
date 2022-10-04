import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 팔로잉 검색
 *
 */
export const GET_FOLLOWINGS = gql`
    ${PAGING_META_FIELDS}
    query GetFollowings($offset: Int, $limit: Int!, $nickname: String) {
        followings(offset: $offset, limit: $limit, nickname: $nickname) {
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
                ...PagingMetaFields
            }
        }
    }
`;
