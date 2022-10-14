import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_USER_FIELDS } from '../../fragment/user';

export const GET_NOTIFICATIONS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_USER_FIELDS}
    query GetNotifications($offset: Int, $limit: Int!) {
        notifications(offset: $offset, limit: $limit) {
            nodes {
                id
                content
                createdAt
                readedAt

                from {
                    ...CoreUserFields
                }
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
