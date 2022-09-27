import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface CreateCommentRequestPayload extends Payload {
    postId: string;
    content: string;
}

export interface CreateCommentRequestAction
    extends PayloadAction<CreateCommentRequestPayload> {}

export interface CreateCommentSuccessAction extends Action<string> {}

export interface CreateCommentFailureAction extends ErrorAction {}

export type CreateCommentAction =
    | CreateCommentRequestAction
    | CreateCommentSuccessAction;
