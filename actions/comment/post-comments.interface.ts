import { ErrorAction, PayloadAction } from '..';
import { Comment } from '../../interfaces/comment';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { GetCommentsRequestPayload } from './get-comments.interface';

export interface PostCommentsRequestPayload
    extends Pick<GetCommentsRequestPayload, 'offset' | 'limit' | 'postId'> {}

export interface PostCommentsSuccessPayload {
    postId: string;
    nodes: Comment[];
    pageInfo: OffsetPageInfo;
}

export interface PostCommentsRequestAction
    extends PayloadAction<PostCommentsRequestPayload> {}

export interface PostCommentsSuccessAction
    extends PayloadAction<PostCommentsSuccessPayload> {}

export interface PostCommentsFailureAction extends ErrorAction {}

export type PostCommentsAction =
    | PostCommentsRequestAction
    | PostCommentsSuccessAction
    | PostCommentsFailureAction;
