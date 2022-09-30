import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface CreateUserRequestPayload extends Payload {
    email: string;
    nickname: string;
    avatar?: string;
}

export interface CreateUserRequestAction
    extends PayloadAction<CreateUserRequestPayload> {}

export interface CreateUserSuccessAction extends Action<string> {}

export interface CreateUserFailureAction extends ErrorAction {}

export type CreateUserAction =
    | CreateUserRequestAction
    | CreateUserSuccessAction
    | CreateUserFailureAction;
