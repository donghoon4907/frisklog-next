import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 게시물 검색
 *
 * @param $order         정렬
 * @param $searchKeyword 검색어
 * @param $userId        사용자 ID
 */
export const GET_POSTS = gql`
    ${PAGING_META_FIELDS}
    query GetPosts(
        $offset: Int
        $limit: Int!
        $searchKeyword: String
        $userId: ID # $order: [[String]]
    ) {
        posts(
            offset: $offset
            limit: $limit
            searchKeyword: $searchKeyword
            userId: $userId # order: $order
        ) {
            nodes {
                id
                content
                createdAt
                likeCount

                user {
                    id
                    nickname
                    avatar
                    link
                    status
                    statusText
                }

                likers {
                    id
                }

                categories {
                    content
                }
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
