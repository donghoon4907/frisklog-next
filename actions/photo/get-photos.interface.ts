import { OffsetLimitRequestPayload } from '../../interfaces/request';
import { PhotoType } from '../../types/photo';

export interface GetPhotosRequestPayload extends OffsetLimitRequestPayload {
    type?: PhotoType;
}
