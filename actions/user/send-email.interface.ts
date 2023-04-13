import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface SendEmailRequestPayload {
    email: string;
    captcha: string;
}

export interface SendEmailRequestAction
    extends PayloadAction<SendEmailRequestPayload> {}

export interface SendEmailSuccessAction extends Action<string> {}

export interface SendEmailFailureAction extends ErrorAction {}

export type SendEmailAction =
    | SendEmailRequestAction
    | SendEmailSuccessAction
    | SendEmailFailureAction;
