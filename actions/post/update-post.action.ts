import {
    UpdatePostFailureAction,
    UpdatePostRequestAction,
    UpdatePostRequestPayload,
    UpdatePostSuccessAction,
} from './update-post.interface';

const REQUEST_NAME = 'UPDATE_POST';

export const updatePostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function updatePostRequest(
    payload: UpdatePostRequestPayload,
): UpdatePostRequestAction {
    return {
        type: updatePostActionTypes.REQUEST,
        payload,
    };
}

export function updatePostSuccess(): UpdatePostSuccessAction {
    return {
        type: updatePostActionTypes.SUCCESS,
    };
}

export function updatePostFailure(error: string): UpdatePostFailureAction {
    return {
        type: updatePostActionTypes.FAILURE,
        error,
    };
}
