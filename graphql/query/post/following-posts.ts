import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 좋아요한 게시물 검색
 *
 * @param $order  정렬
 * @param $userId 사용자 ID
 */
export const GET_FOLLOWING_POSTS = gql`
    ${PAGING_META_FIELDS}
    query GetFollowingPosts(
        $offset: Int
        $limit: Int!
        $userId: ID
        $order: [[String]]
    ) {
        followingPosts(
            offset: $offset
            limit: $limit
            userId: $userId
            order: $order
        ) {
            nodes {
                id
                content
                link
                createdAt
                updatedAt
                likeCount
                commentCount

                user {
                    id
                    nickname
                    avatar
                    link
                    status
                    statusText
                }
            }

            pageInfo {
                ...PagingMetadataFields
            }
        }
    }
`;
