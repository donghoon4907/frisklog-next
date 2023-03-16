import { gql } from 'graphql-request';

import { PAGING_META_FIELDS } from '../../fragment/common/paging-meta';
import { CORE_PHOTO_FIELDS } from '../../fragment/photo';

/**
 * 사진첩 검색
 *
 */
export const GET_PHOTOS = gql`
    ${PAGING_META_FIELDS}
    ${CORE_PHOTO_FIELDS}
    query GetPhotos($offset: Int, $limit: Int!, $type: String) {
        photos(offset: $offset, limit: $limit, type: $type) {
            nodes {
                ...CorePhotoFields
            }

            pageInfo {
                ...PagingMetaFields
            }
        }
    }
`;
