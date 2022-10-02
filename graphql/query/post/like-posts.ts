import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

/**
 * 좋아요한 게시물 검색
 *
 * @param $order  정렬
 * @param $userId 사용자 ID
 */
export const GET_LIKE_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetCategoryPosts(
        $offset: Int
        $limit: Int!
        $userId: ID
        $order: [[String]]
    ) {
        likePosts(
            offset: $offset
            limit: $limit
            userId: $userId
            order: $order
        ) {
            nodes {
                ...PostItemFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
