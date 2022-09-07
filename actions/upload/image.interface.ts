import { Action } from 'redux';
import { ErrorAction, PayloadAction } from '..';

export interface UploadImageRequestPayload {
    formData: FormData;
    callbackFunc?: (fileName: string) => void;
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
