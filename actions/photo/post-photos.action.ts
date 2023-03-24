import {
    PostPhotosRequestAction,
    PostPhotosRequestPayload,
    PostPhotosSuccessAction,
    PostPhotosSuccessPayload,
} from './post-photos.interface';

export const POST_PHOTOS_KEY = 'POST_PHOTOS';

export const postPhotosActionTypes = {
    REQUEST: `${POST_PHOTOS_KEY}_REQUEST`,
    SUCCESS: `${POST_PHOTOS_KEY}_SUCCESS`,
    FAILURE: `${POST_PHOTOS_KEY}_FAILURE`,
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
