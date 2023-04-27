import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface LoginGoogleRequestPayload extends Payload {
    token: string;
}

export interface LoginGoogleRequestAction
    extends PayloadAction<LoginGoogleRequestPayload> {}

export interface LoginGoogleSuccessAction extends Action<string> {}

export interface LoginGoogleFailureAction extends ErrorAction {}

export type LoginGoogleAction =
    | LoginGoogleRequestAction
    | LoginGoogleSuccessAction
    | LoginGoogleFailureAction;
