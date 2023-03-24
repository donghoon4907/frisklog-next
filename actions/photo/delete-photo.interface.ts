import { ErrorAction, Payload, PayloadAction } from '..';
import { PhotoType } from '../../types/photo';

export interface DeletePhotoRequestPayload extends Payload {
    id: string;
    type: PhotoType;
}

export interface DeletePhotoRequestAction
    extends PayloadAction<DeletePhotoRequestPayload> {}

export interface DeletePhotoSuccessPayload {
    id: string;
    type: PhotoType;
}

export interface DeletePhotoSuccessAction
    extends PayloadAction<DeletePhotoSuccessPayload> {}

export interface DeletePhotoFailureAction extends ErrorAction {}

export type DeletePhotoAction =
    | DeletePhotoRequestAction
    | DeletePhotoSuccessAction
    | DeletePhotoFailureAction;
