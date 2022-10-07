import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface UnlikePostRequestPayload extends Payload {
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
