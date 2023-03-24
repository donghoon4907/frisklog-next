import {
    DeletePhotoRequestAction,
    DeletePhotoRequestPayload,
    DeletePhotoSuccessAction,
    DeletePhotoSuccessPayload,
} from './delete-photo.interface';

export const DELETE_PHOTO_KEY = 'DELETE_PHOTO';

export const deletePhotoActionTypes = {
    REQUEST: `${DELETE_PHOTO_KEY}_REQUEST`,
    SUCCESS: `${DELETE_PHOTO_KEY}_SUCCESS`,
    FAILURE: `${DELETE_PHOTO_KEY}_FAILURE`,
};

export function deletePhotoRequest(
    payload: DeletePhotoRequestPayload,
): DeletePhotoRequestAction {
    return {
        type: deletePhotoActionTypes.REQUEST,
        payload,
    };
}

export function deletePhotoSuccess(
    payload: DeletePhotoSuccessPayload,
): DeletePhotoSuccessAction {
    return {
        type: deletePhotoActionTypes.SUCCESS,
        payload,
    };
}
