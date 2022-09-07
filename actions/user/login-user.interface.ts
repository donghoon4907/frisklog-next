import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface LoginUserRequestPayload {
    email: string;
    callbackFunc: () => void;
}

export interface LoginUserRequestAction
    extends PayloadAction<LoginUserRequestPayload> {}

export interface LoginUserSuccessAction extends Action<string> {}

export interface LoginUserFailureAction extends ErrorAction {}

export type LoginUserAction =
    | LoginUserRequestAction
    | LoginUserSuccessAction
    | LoginUserFailureAction;
