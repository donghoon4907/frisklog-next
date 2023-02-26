import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface LikedPostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit'>,
        Payload {}

export interface LikedPostsSuccessPayload {
    nodes: Post[];
    pageInfo: OffsetPageInfo;
}

export interface LikedPostsRequestAction
    extends PayloadAction<LikedPostsRequestPayload> {}

export interface LikedPostsSuccessAction
    extends PayloadAction<LikedPostsSuccessPayload> {}

export interface LikedPostsFailureAction extends ErrorAction {}

export type LikedPostsAction =
    | LikedPostsRequestAction
    | LikedPostsSuccessAction
    | LikedPostsFailureAction;
