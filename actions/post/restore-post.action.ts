import {
    RestorePostRequestAction,
    RestorePostRequestPayload,
    RestorePostSuccessAction,
    RestorePostSuccessPayload,
} from './restore-post.interface';

export const RESTORE_POST_KEY = 'RESTORE_POST';

export const restorePostActionTypes = {
    REQUEST: `${RESTORE_POST_KEY}_REQUEST`,
    SUCCESS: `${RESTORE_POST_KEY}_SUCCESS`,
    FAILURE: `${RESTORE_POST_KEY}_FAILURE`,
};

export function restorePostRequest(
    payload: RestorePostRequestPayload,
): RestorePostRequestAction {
    return {
        type: restorePostActionTypes.REQUEST,
        payload,
    };
}

export function restorePostSuccess(
    payload: RestorePostSuccessPayload,
): RestorePostSuccessAction {
    return {
        type: restorePostActionTypes.SUCCESS,
        payload,
    };
}
