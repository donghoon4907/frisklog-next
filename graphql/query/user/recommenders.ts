import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';

/**
 * 추천인 검색
 *
 */
export const GET_RECOMMENDERS = gql`
    ${PAGING_META_FIELDS}
    query GetRecommenders($offset: Int, $limit: Int!) {
        recommenders(offset: $offset, limit: $limit) {
            nodes {
                id
                nickname
                avatar
                link
                status
                statusText
                isMaster
                createdAt
                updatedAt
                followerCount
                postCount
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
