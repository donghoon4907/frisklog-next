import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface DeletePostRequestPayload {
    id: string;
}

export interface DeletePostRequestAction
    extends PayloadAction<DeletePostRequestPayload> {}

export interface DeletePostSuccessAction extends Action<string> {}

export interface DeletePostFailureAction extends ErrorAction {}

export type DeletePostAction =
    | DeletePostRequestAction
    | DeletePostSuccessAction
    | DeletePostFailureAction;
