import { Action } from 'redux';
import { ErrorAction, Payload, PayloadAction } from '..';
import { PhotoType } from '../../types/photo';

export interface UploadImageRequestPayload extends Payload {
    formData: FormData;
    type: PhotoType;
}

export interface UploadImageRequestAction
    extends PayloadAction<UploadImageRequestPayload> {}

export interface UploadImageSuccessPayload {
    fileName: string;
}

export interface UploadImageSuccessAction
    extends PayloadAction<UploadImageSuccessPayload> {}

export interface UploadImageFailureAction extends ErrorAction {}

export type UploadImageAction =
    | UploadImageRequestAction
    | UploadImageSuccessAction
    | UploadImageFailureAction;
