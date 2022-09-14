import {
    UpdatePostRequestAction,
    UpdatePostRequestPayload,
    UpdatePostSuccessAction,
    UpdatePostSuccessPayload,
} from './update-post.interface';

export const UPDATE_POST_KEY = 'UPDATE_POST';

export const updatePostActionTypes = {
    REQUEST: `${UPDATE_POST_KEY}_REQUEST`,
    SUCCESS: `${UPDATE_POST_KEY}_SUCCESS`,
    FAILURE: `${UPDATE_POST_KEY}_FAILURE`,
};

export function updatePostRequest(
    payload: UpdatePostRequestPayload,
): UpdatePostRequestAction {
    return {
        type: updatePostActionTypes.REQUEST,
        payload,
    };
}

export function updatePostSuccess(
    payload: UpdatePostSuccessPayload,
): UpdatePostSuccessAction {
    return {
        type: updatePostActionTypes.SUCCESS,
        payload,
    };
}
