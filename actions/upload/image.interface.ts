import { Action } from 'redux';
import { ErrorAction, Payload, PayloadAction } from '..';

export interface UploadImageRequestPayload extends Payload {
    formData: FormData;
}

export interface UploadImageRequestAction
    extends PayloadAction<UploadImageRequestPayload> {}

export interface UploadImageSuccessPayload {
    fileName: string;
}

export interface UploadImageSuccessAction
    extends PayloadAction<UploadImageSuccessPayload> {}

export interface UploadImageFailureAction extends ErrorAction {}

export interface UploadImageCleanUpAction extends Action<string> {}

export type UploadImageAction =
    | UploadImageRequestAction
    | UploadImageSuccessAction
    | UploadImageFailureAction
    | UploadImageCleanUpAction;
