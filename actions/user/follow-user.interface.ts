import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';

export interface FollowUserRequestPayload {
    id: string;
}

export interface FollowUserRequestAction
    extends PayloadAction<FollowUserRequestPayload> {}

export interface FollowUserSuccessAction extends Action<string> {}

export interface FollowUserFailureAction extends ErrorAction {}

export type FollowUserAction =
    | FollowUserRequestAction
    | FollowUserSuccessAction
    | FollowUserFailureAction;
