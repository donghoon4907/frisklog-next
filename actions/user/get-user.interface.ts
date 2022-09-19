import { ErrorAction, PayloadAction } from '..';
import { User } from '../../interfaces/user';

export interface GetUserRequestPayload {
    id: string;
}

export interface GetUserSuccessPayload extends User {}

export interface GetUserRequestAction
    extends PayloadAction<GetUserRequestPayload> {}

export interface GetUserSuccessAction
    extends PayloadAction<GetUserSuccessPayload> {}

export interface GetUserFailureAction extends ErrorAction {}

export type GetUserAction =
    | GetUserRequestAction
    | GetUserSuccessAction
    | GetUserFailureAction;
