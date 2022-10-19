import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface RemovedPostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit'>,
        Payload {}

export interface RemovedPostsSuccessPayload {
    nodes: Post[];
    pageInfo: OffsetPageInfo;
}

export interface RemovedPostsRequestAction
    extends PayloadAction<RemovedPostsRequestPayload> {}

export interface RemovedPostsSuccessAction
    extends PayloadAction<RemovedPostsSuccessPayload> {}

export interface RemovedPostsFailureAction extends ErrorAction {}

export type RemovedPostsAction =
    | RemovedPostsRequestAction
    | RemovedPostsSuccessAction
    | RemovedPostsFailureAction;
