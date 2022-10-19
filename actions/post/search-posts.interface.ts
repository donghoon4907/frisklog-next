import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface SearchPostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit' | 'searchKeyword'>,
        Payload {}

export interface SearchPostsSuccessPayload {
    nodes: Post[];
    pageInfo: OffsetPageInfo;
}

export interface SearchPostsRequestAction
    extends PayloadAction<SearchPostsRequestPayload> {}

export interface SearchPostsSuccessAction
    extends PayloadAction<SearchPostsSuccessPayload> {}

export interface SearchPostsFailureAction extends ErrorAction {}

export type SearchPostsAction =
    | SearchPostsRequestAction
    | SearchPostsSuccessAction
    | SearchPostsFailureAction;
