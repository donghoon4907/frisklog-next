import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface HomePostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit' | 'visibility'>,
        Payload {}

export interface HomePostsSuccessPayload {
    nodes: Post[];
    pageInfo: OffsetPageInfo;
}

export interface HomePostsRequestAction
    extends PayloadAction<HomePostsRequestPayload> {}

export interface HomePostsSuccessAction
    extends PayloadAction<HomePostsSuccessPayload> {}

export interface HomePostsFailureAction extends ErrorAction {}

export type HomePostsAction =
    | HomePostsRequestAction
    | HomePostsSuccessAction
    | HomePostsFailureAction;
