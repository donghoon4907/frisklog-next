import {
    DeletePostRequestAction,
    DeletePostRequestPayload,
    DeletePostSuccessAction,
} from './delete-post.interface';

export const DELETE_POST_KEY = 'DELETE_POST';

export const deletePostActionTypes = {
    REQUEST: `${DELETE_POST_KEY}_REQUEST`,
    SUCCESS: `${DELETE_POST_KEY}_SUCCESS`,
    FAILURE: `${DELETE_POST_KEY}_FAILURE`,
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
