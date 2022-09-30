import { ErrorAction, PayloadAction } from '..';
import { User } from '../../interfaces/user';

export interface FollowUserRequestPayload {
    id: string;
}

export interface FollowUserRequestAction
    extends PayloadAction<FollowUserRequestPayload> {}

export interface FollowUserSuccessPayload extends User {}

export interface FollowUserSuccessAction
    extends PayloadAction<FollowUserSuccessPayload> {}

export interface FollowUserFailureAction extends ErrorAction {}

export type FollowUserAction =
    | FollowUserRequestAction
    | FollowUserSuccessAction
    | FollowUserFailureAction;
