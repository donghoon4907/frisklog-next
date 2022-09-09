import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface DeleteCommentRequestPayload {
    id: string;
}

export interface DeleteCommentRequestAction
    extends PayloadAction<DeleteCommentRequestPayload> {}

export interface DeleteCommentSuccessAction extends Action<string> {}

export interface DeleteCommentFailureAction extends ErrorAction {}

export type DeleteCommentAction =
    | DeleteCommentRequestAction
    | DeleteCommentSuccessAction
    | DeleteCommentFailureAction;
