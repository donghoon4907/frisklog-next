import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';

export interface GetPostsRequestPayload {
    offset?: number;
    limit: number;
    searchKeyword?: string;
    userId?: string;
    order?: string[][];
}

export interface GetPostsSuccessPayload {
    nodes: Record<string, any>[];
    pageInfo: OffsetPageInfo;
}

export interface GetPostsRequestAction
    extends PayloadAction<GetPostsRequestPayload> {}

export interface GetPostsSuccessAction
    extends PayloadAction<GetPostsSuccessPayload> {}

export interface GetPostsFailureAction extends ErrorAction {}

export type GetPostsAction =
    | GetPostsRequestAction
    | GetPostsSuccessAction
    | GetPostsFailureAction;
