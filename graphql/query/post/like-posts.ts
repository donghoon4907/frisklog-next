import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

/**
 * 좋아요한 게시물 검색
 *
 */
export const GET_LIKED_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetCategoryPosts($offset: Int, $limit: Int!) {
        likePosts(offset: $offset, limit: $limit) {
            nodes {
                ...PostItemFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
