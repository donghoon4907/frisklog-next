import {
    UploadImageCleanUpAction,
    UploadImageFailureAction,
    UploadImageRequestAction,
    UploadImageRequestPayload,
    UploadImageSuccessAction,
    UploadImageSuccessPayload,
} from './image.interface';

export const UPLOAD_IMAGE_KEY = 'UPLOAD_IMAGE';

export const uploadImageActionTypes = {
    REQUEST: `${UPLOAD_IMAGE_KEY}_REQUEST`,
    SUCCESS: `${UPLOAD_IMAGE_KEY}_SUCCESS`,
    FAILURE: `${UPLOAD_IMAGE_KEY}_FAILURE`,
    CLEANUP: `${UPLOAD_IMAGE_KEY}_CLEANUP`,
};

export function uploadImageRequest(
    payload: UploadImageRequestPayload,
): UploadImageRequestAction {
    return {
        type: uploadImageActionTypes.REQUEST,
        payload,
    };
}

export function uploadImageSuccess(
    payload: UploadImageSuccessPayload,
): UploadImageSuccessAction {
    return {
        type: uploadImageActionTypes.SUCCESS,
        payload,
    };
}

export function uploadImageFailure(error: string): UploadImageFailureAction {
    return {
        type: uploadImageActionTypes.FAILURE,
        error,
    };
}

export function uploadImageCleanUp(): UploadImageCleanUpAction {
    return {
        type: uploadImageActionTypes.CLEANUP,
    };
}
