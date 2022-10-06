import { ErrorAction, Payload, PayloadAction } from '..';

export interface DeletePostRequestPayload extends Payload {
    id: string;
}

export interface DeletePostRequestAction
    extends PayloadAction<DeletePostRequestPayload> {}

export interface DeletePostSuccessPayload {
    id: string;
}

export interface DeletePostSuccessAction
    extends PayloadAction<DeletePostSuccessPayload> {}

export interface DeletePostFailureAction extends ErrorAction {}

export type DeletePostAction =
    | DeletePostRequestAction
    | DeletePostSuccessAction
    | DeletePostFailureAction;
