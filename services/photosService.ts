import { GetPhotosRequestPayload } from '../actions/photo/get-photos.interface';
import { DeletePostRequestPayload } from '../actions/post/delete-post.interface';
import { client } from '../graphql/client';
import { MUTATION_DELETE_PHOTO } from '../graphql/mutation/photo/delete-photo';
import { GET_PHOTOS } from '../graphql/query/photo/photos';

export function getPhotos(payload: GetPhotosRequestPayload) {
    return client.request(GET_PHOTOS, payload);
}

export function deletePhoto(payload: DeletePostRequestPayload) {
    return client.request(MUTATION_DELETE_PHOTO, payload);
}
