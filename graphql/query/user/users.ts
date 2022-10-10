import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_USER_FIELDS } from '../../fragment/user';

/**
 * 사용자 검색
 *
 * @param $nickname  별명
 * @param $order     정렬
 */
export const GET_USERS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_USER_FIELDS}
    query GetUsers($offset: Int, $limit: Int!, $nickname: String) {
        users(offset: $offset, limit: $limit, nickname: $nickname) {
            nodes {
                ...CoreUserFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
