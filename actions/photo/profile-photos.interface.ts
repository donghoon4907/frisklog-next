import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Photo } from '../../interfaces/photo';
import { GetPhotosRequestPayload } from './get-photos.interface';

export interface ProfilePhotosRequestPayload
    extends Pick<GetPhotosRequestPayload, 'offset' | 'limit' | 'type'> {}

export interface ProfilePhotosSuccessPayload {
    nodes: Photo[];
    pageInfo: OffsetPageInfo;
}

export interface ProfilePhotosRequestAction
    extends PayloadAction<GetPhotosRequestPayload> {}

export interface ProfilePhotosSuccessAction
    extends PayloadAction<ProfilePhotosSuccessPayload> {}

export interface ProfilePhotosFailureAction extends ErrorAction {}

export type ProfilePhotosAction =
    | ProfilePhotosRequestAction
    | ProfilePhotosSuccessAction
    | ProfilePhotosFailureAction;
