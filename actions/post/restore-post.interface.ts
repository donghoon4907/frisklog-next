import { ErrorAction, Payload, PayloadAction } from '..';

export interface RestorePostRequestPayload extends Payload {
    id: string;
}

export interface RestorePostRequestAction
    extends PayloadAction<RestorePostRequestPayload> {}

export interface RestorePostSuccessPayload {
    id: string;
}

export interface RestorePostSuccessAction
    extends PayloadAction<RestorePostSuccessPayload> {}

export interface RestorePostFailureAction extends ErrorAction {}

export type RestorePostAction =
    | RestorePostRequestAction
    | RestorePostSuccessAction
    | RestorePostFailureAction;
