import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 *  댓글 검색
 *
 * @param $order  정렬
 * @param $postId 게시물 ID
 */
export const GET_COMMENTS = gql`
    ${PAGING_META_FIELDS}
    query GetComments(
        $offset: Int
        $limit: Int!
        $postId: ID!
        $order: [[String]]
    ) {
        comments(
            offset: $offset
            limit: $limit
            searchKeyword: $searchKeyword
            userId: $userId
            order: $order
        ) {
            nodes {
                id
                content
                createdAt
                updatedAt

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
