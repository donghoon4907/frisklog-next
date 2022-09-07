import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface VerifyUserRequestPayload {
    email: string;
    isKeep: boolean;
    captcha: string;
}

export interface VerifyUserRequestAction
    extends PayloadAction<VerifyUserRequestPayload> {}

export interface VerifyUserSuccessAction extends Action<string> {}

export interface VerifyUserFailureAction extends ErrorAction {}

export type VerifyUserAction =
    | VerifyUserRequestAction
    | VerifyUserSuccessAction
    | VerifyUserFailureAction;
