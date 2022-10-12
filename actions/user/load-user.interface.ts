import { Action } from 'redux';

import { ErrorAction } from '..';

export interface LoadUserRequestAction extends Action<string> {}

export interface LoadUserSuccessAction extends Action<string> {}

export interface LoadUserFailureAction extends ErrorAction {}

export type LoadUserAction =
    | LoadUserRequestAction
    | LoadUserSuccessAction
    | LoadUserFailureAction;
