import { GetPhotosRequestPayload } from '../actions/photo/get-photos.interface';
import { client } from '../graphql/client';
import { GET_PHOTOS } from '../graphql/query/photo/photos';

export function getPhotos(payload: GetPhotosRequestPayload) {
    return client.request(GET_PHOTOS, payload);
}
