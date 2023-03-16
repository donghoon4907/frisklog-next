import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Photo } from '../../interfaces/photo';
import { GetPhotosRequestPayload } from './get-photos.interface';

export interface PostPhotosRequestPayload
    extends Pick<GetPhotosRequestPayload, 'offset' | 'limit' | 'type'> {}

export interface PostPhotosSuccessPayload {
    nodes: Photo[];
    pageInfo: OffsetPageInfo;
}

export interface PostPhotosRequestAction
    extends PayloadAction<GetPhotosRequestPayload> {}

export interface PostPhotosSuccessAction
    extends PayloadAction<PostPhotosSuccessPayload> {}

export interface PostPhotosFailureAction extends ErrorAction {}

export type PostPhotosAction =
    | PostPhotosRequestAction
    | PostPhotosSuccessAction
    | PostPhotosFailureAction;
