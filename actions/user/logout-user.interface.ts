import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface LogoutUserRequestPayload extends Payload {}

export interface LogoutUserRequestAction
    extends PayloadAction<LogoutUserRequestPayload> {}

export interface LogoutUserSuccessAction extends Action<string> {}

export interface LogoutUserFailureAction extends ErrorAction {}

export type LogoutUserAction =
    | LogoutUserRequestAction
    | LogoutUserSuccessAction
    | LogoutUserFailureAction;
