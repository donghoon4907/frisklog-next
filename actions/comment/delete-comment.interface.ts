import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface DeleteCommentRequestPayload extends Payload {
    id: string;
}

export interface DeleteCommentRequestAction
    extends PayloadAction<DeleteCommentRequestPayload> {}

export interface DeleteCommentSuccessPayload {
    id: string;
}

export interface DeleteCommentSuccessAction
    extends PayloadAction<DeleteCommentSuccessPayload> {}

export interface DeleteCommentFailureAction extends ErrorAction {}

export type DeleteCommentAction =
    | DeleteCommentRequestAction
    | DeleteCommentSuccessAction
    | DeleteCommentFailureAction;
