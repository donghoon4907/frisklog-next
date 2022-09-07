import {
    UploadImageCleanUpAction,
    UploadImageFailureAction,
    UploadImageRequestAction,
    UploadImageRequestPayload,
    UploadImageSuccessAction,
    UploadImageSuccessPayload,
} from './image.interface';

const REQUEST_NAME = 'UPLOAD_IMAGE';

export const uploadImageActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
    CLEANUP: `${REQUEST_NAME}_CLEANUP`,
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
