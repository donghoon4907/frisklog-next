import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface LoginGithubRequestPayload {
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
