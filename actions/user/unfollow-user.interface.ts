import { ErrorAction, PayloadAction } from '..';
import { User } from '../../interfaces/user';

export interface UnfollowUserRequestPayload {
    id: string;
}

export interface UnfollowUserRequestAction
    extends PayloadAction<UnfollowUserRequestPayload> {}

export interface UnfollowUserSuccessPayload extends User {}

export interface UnfollowUserSuccessAction
    extends PayloadAction<UnfollowUserSuccessPayload> {}

export interface UnfollowUserFailureAction extends ErrorAction {}

export type UnfollowUserAction =
    | UnfollowUserRequestAction
    | UnfollowUserSuccessAction
    | UnfollowUserFailureAction;
