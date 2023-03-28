import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface LoginNaverRequestPayload extends Payload {
    code: string;
}

export interface LoginNaverRequestAction
    extends PayloadAction<LoginNaverRequestPayload> {}

export interface LoginNaverSuccessAction extends Action<string> {}

export interface LoginNaverFailureAction extends ErrorAction {}

export type LoginNaverAction =
    | LoginNaverRequestAction
    | LoginNaverSuccessAction
    | LoginNaverFailureAction;
