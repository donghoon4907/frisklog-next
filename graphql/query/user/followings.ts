import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_USER_FIELDS } from '../../fragment/user';

/**
 * 팔로잉 검색
 *
 */
export const GET_FOLLOWINGS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_USER_FIELDS}
    query GetFollowings($offset: Int, $limit: Int!, $nickname: String) {
        followings(offset: $offset, limit: $limit, nickname: $nickname) {
            nodes {
                ...CoreUserFields

                followerCount
                postCount
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
