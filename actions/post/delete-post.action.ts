import {
    DeletePostFailureAction,
    DeletePostRequestAction,
    DeletePostRequestPayload,
    DeletePostSuccessAction,
} from './delete-post.interface';

const REQUEST_NAME = 'CREATE_POST';

export const deletePostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function deletePostRequest(
    payload: DeletePostRequestPayload,
): DeletePostRequestAction {
    return {
        type: deletePostActionTypes.REQUEST,
        payload,
    };
}

export function deletePostSuccess(): DeletePostSuccessAction {
    return {
        type: deletePostActionTypes.SUCCESS,
    };
}

export function deletePostFailure(error: string): DeletePostFailureAction {
    return {
        type: deletePostActionTypes.FAILURE,
        error,
    };
}
