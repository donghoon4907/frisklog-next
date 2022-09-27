import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';
import { Comment } from '../../interfaces/comment';

export interface CreateCommentRequestPayload extends Payload {
    postId: string;
    content: string;
}

export interface CreateCommentRequestAction
    extends PayloadAction<CreateCommentRequestPayload> {}

export interface CreateCommentSuccessPayload extends Comment {}

export interface CreateCommentSuccessAction
    extends PayloadAction<CreateCommentSuccessPayload> {}

export interface CreateCommentFailureAction extends ErrorAction {}

export type CreateCommentAction =
    | CreateCommentRequestAction
    | CreateCommentSuccessAction;
