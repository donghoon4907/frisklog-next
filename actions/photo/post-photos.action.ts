import {
    PostPhotosRequestAction,
    PostPhotosRequestPayload,
    PostPhotosSuccessAction,
    PostPhotosSuccessPayload,
} from './post-photos.interface';

export const POST_PHOTOS = 'POST_PHOTOS';

export const postPhotosActionTypes = {
    REQUEST: `${POST_PHOTOS}_REQUEST`,
    SUCCESS: `${POST_PHOTOS}_SUCCESS`,
    FAILURE: `${POST_PHOTOS}_FAILURE`,
};

export function postPhotosRequest(
    payload: PostPhotosRequestPayload,
): PostPhotosRequestAction {
    return {
        type: postPhotosActionTypes.REQUEST,
        payload,
    };
}

export function postPhotosSuccess(
    payload: PostPhotosSuccessPayload,
): PostPhotosSuccessAction {
    return {
        type: postPhotosActionTypes.SUCCESS,
        payload,
    };
}
