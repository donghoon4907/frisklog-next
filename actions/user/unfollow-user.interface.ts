import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface UnfollowUserRequestPayload {
    id: string;
}

export interface UnfollowUserRequestAction
    extends PayloadAction<UnfollowUserRequestPayload> {}

export interface UnfollowUserSuccessAction extends Action<string> {}

export interface UnfollowUserFailureAction extends ErrorAction {}

export type UnfollowUserAction =
    | UnfollowUserRequestAction
    | UnfollowUserSuccessAction
    | UnfollowUserFailureAction;
