import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

/**
 * 게시물 검색
 *
 * @param $order         정렬
 * @param $searchKeyword 검색어
 * @param $userId        사용자 ID
 */
export const GET_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetPosts(
        $offset: Int
        $limit: Int!
        $searchKeyword: String
        $userId: String # $order: [[String]]
    ) {
        posts(
            offset: $offset
            limit: $limit
            searchKeyword: $searchKeyword
            userId: $userId # order: $order
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
