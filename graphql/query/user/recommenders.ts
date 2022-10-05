import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_USER_FIELDS } from '../../fragment/user';

/**
 * 추천인 검색
 *
 */
export const GET_RECOMMENDERS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_USER_FIELDS}
    query GetRecommenders($offset: Int, $limit: Int!) {
        recommenders(offset: $offset, limit: $limit) {
            nodes {
                ...CoreUserFields

                followerCount
                postCount
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
