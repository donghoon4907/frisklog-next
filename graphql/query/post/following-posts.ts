import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_USER_FIELDS } from '../../fragment/user';

export const GET_FOLLOWING_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_USER_FIELDS}
    query GetFollowingPosts($offset: Int, $limit: Int!, $userId: String) {
        followingPosts(offset: $offset, limit: $limit, userId: $userId) {
            nodes {
                id
                content
                link
                createdAt
                updatedAt
                likeCount
                commentCount

                user {
                    ...CoreUserFields
                }
            }

            pageInfo {
                ...PagingMetadataFields
            }
        }
    }
`;
