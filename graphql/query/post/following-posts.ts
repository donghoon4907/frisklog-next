import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

export const GET_FOLLOWING_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetFollowingPosts($offset: Int, $limit: Int!, $userId: String) {
        followingPosts(offset: $offset, limit: $limit, userId: $userId) {
            nodes {
                ...PostItemFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
