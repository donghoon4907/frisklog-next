import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { FollowingPost } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface FollowingPostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit' | 'userId'>,
        Payload {}

export interface FollowingPostsSuccessPayload {
    nodes: FollowingPost[];
    pageInfo: OffsetPageInfo;
}

export interface FollowingPostsRequestAction
    extends PayloadAction<FollowingPostsRequestPayload> {}

export interface FollowingPostsSuccessAction
    extends PayloadAction<FollowingPostsSuccessPayload> {}

export interface FollowingPostsFailureAction extends ErrorAction {}

export type FollowingPostsAction =
    | FollowingPostsRequestAction
    | FollowingPostsSuccessAction
    | FollowingPostsFailureAction;
