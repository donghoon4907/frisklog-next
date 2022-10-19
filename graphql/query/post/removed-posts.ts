import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { POST_ITEM_FIELDS } from '../../fragment/post';

export const GET_REMOVED_POSTS = gql`
    ${PAGING_META_FIELDS}
    ${POST_ITEM_FIELDS}
    query GetRemovedPosts($offset: Int, $limit: Int!) {
        removedPosts(offset: $offset, limit: $limit) {
            nodes {
                ...PostItemFields
                deletedAt
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
