import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface UpdateUserRequestPayload {
    nickname?: string;
    avatar?: string;
    status?: string;
    isKeep?: boolean;
}

export interface UpdateUserRequestAction
    extends PayloadAction<UpdateUserRequestPayload> {}

export interface UpdateUserSuccessAction extends Action<string> {}

export interface UpdateUserFailureAction extends ErrorAction {}

export type UpdateUserAction =
    | UpdateUserRequestAction
    | UpdateUserSuccessAction
    | UpdateUserFailureAction;
