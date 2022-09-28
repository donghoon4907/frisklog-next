import { ErrorAction, PayloadAction } from '..';
import { Comment } from '../../interfaces/comment';
import { CreateCommentRequestPayload } from './create-comment.interface';

export interface UpdateCommentRequestPayload
    extends Pick<CreateCommentRequestPayload, 'content' | 'callbackFunc'> {
    id: string;
}

export interface UpdateCommentRequestAction
    extends PayloadAction<UpdateCommentRequestPayload> {}

export interface UpdateCommentSuccessPayload extends Comment {}

export interface UpdateCommentSuccessAction
    extends PayloadAction<UpdateCommentSuccessPayload> {}

export interface UpdateCommentFailureAction extends ErrorAction {}

export type UpdateCommentAction =
    | UpdateCommentRequestAction
    | UpdateCommentSuccessAction
    | UpdateCommentFailureAction;
