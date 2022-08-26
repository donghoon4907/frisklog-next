import { gql } from 'graphql-request';

export const PAGING_META_FIELDS = gql`
    fragment PagingMetaFields on OffsetMetadata {
        currentPage
        lastPage
        pageSize
        nodeCount
        totalCount
    }
`;
