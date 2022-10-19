import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface UserPostsRequestPayload
    extends Pick<
            GetPostsRequestPayload,
            'offset' | 'limit' | 'userId' | 'order'
        >,
        Payload {}

export interface UserPostsSuccessPayload {
    nodes: Post[];
    pageInfo: OffsetPageInfo;
}

export interface UserPostsRequestAction
    extends PayloadAction<UserPostsRequestPayload> {}

export interface UserPostsSuccessAction
    extends PayloadAction<UserPostsSuccessPayload> {}

export interface UserPostsFailureAction extends ErrorAction {}

export type UserPostsAction =
    | UserPostsRequestAction
    | UserPostsSuccessAction
    | UserPostsFailureAction;
