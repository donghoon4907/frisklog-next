import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface LikePostRequestPayload {
    id: string;
}

export interface LikePostRequestAction
    extends PayloadAction<LikePostRequestPayload> {}

export interface LikePostSuccessAction extends Action<string> {}

export interface LikePostFailureAction extends ErrorAction {}

export type LikePostAction =
    | LikePostRequestAction
    | LikePostSuccessAction
    | LikePostFailureAction;
