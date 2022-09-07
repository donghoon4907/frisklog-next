import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface CreateUserRequestPayload {
    email: string;
    nickname: string;
    avatar?: string;
    callbackFunc?: () => void;
}

export interface CreateUserRequestAction
    extends PayloadAction<CreateUserRequestPayload> {}

export interface CreateUserSuccessAction extends Action<string> {}

export interface CreateUserFailureAction extends ErrorAction {}

export type CreateUserAction =
    | CreateUserRequestAction
    | CreateUserSuccessAction
    | CreateUserFailureAction;
