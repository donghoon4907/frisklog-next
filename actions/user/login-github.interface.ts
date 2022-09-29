import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface LoginGithubRequestPayload extends Payload {
    code: string;
}

export interface LoginGithubRequestAction
    extends PayloadAction<LoginGithubRequestPayload> {}

export interface LoginGithubSuccessAction extends Action<string> {}

export interface LoginGithubFailureAction extends ErrorAction {}

export type LoginGithubAction =
    | LoginGithubRequestAction
    | LoginGithubSuccessAction
    | LoginGithubFailureAction;
