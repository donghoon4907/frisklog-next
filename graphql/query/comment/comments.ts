import { gql } from 'graphql-request';

import { CORE_COMMENT_FIELDS } from '../../fragment/comment';
import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 *  댓글 검색
 *
 * @param $order  정렬
 * @param $postId 게시물 ID
 */
export const GET_COMMENTS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_COMMENT_FIELDS}
    query GetComments(
        $offset: Int
        $limit: Int!
        $postId: String!
        $order: [[String!]!]
    ) {
        comments(
            offset: $offset
            limit: $limit
            postId: $postId
            order: $order
        ) {
            nodes {
                ...CoreCommentFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
