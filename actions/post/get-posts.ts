import { OffsetPageInfo } from '../../interfaces/page-info';

export enum GetPostsAction {
    REQUEST = 'QUERY_POSTS_REQUEST',
    SUCCESS = 'QUERY_POSTS_SUCCESS',
    FAILURE = 'QUERY_POSTS_FAILURE',
}

export interface GetPostsArgsPayload {
    offset?: number;
    limit: number;
    searchKeyword?: string;
    userId?: number;
    order?: string[][];
}

export interface GetPostsResponsePayload {
    nodes: Record<string, any>[];
    pageInfo: OffsetPageInfo;
}
