import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface UnlikePostRequestPayload {
    id: string;
}

export interface UnlikePostRequestAction
    extends PayloadAction<UnlikePostRequestPayload> {}

export interface UnlikePostSuccessAction extends Action<string> {}

export interface UnlikePostFailureAction extends ErrorAction {}

export type UnlikePostAction =
    | UnlikePostRequestAction
    | UnlikePostSuccessAction
    | UnlikePostFailureAction;
