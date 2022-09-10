import {
    UnlikePostFailureAction,
    UnlikePostRequestAction,
    UnlikePostRequestPayload,
    UnlikePostSuccessAction,
} from './unlike-post.interface';

export const UNLIKE_POST_KEY = 'UNLIKE_POST';

export const unlikePostActionTypes = {
    REQUEST: `${UNLIKE_POST_KEY}_REQUEST`,
    SUCCESS: `${UNLIKE_POST_KEY}_SUCCESS`,
    FAILURE: `${UNLIKE_POST_KEY}_FAILURE`,
};

export function unlikePostRequest(
    payload: UnlikePostRequestPayload,
): UnlikePostRequestAction {
    return {
        type: unlikePostActionTypes.REQUEST,
        payload,
    };
}

export function unlikePostSuccess(): UnlikePostSuccessAction {
    return {
        type: unlikePostActionTypes.SUCCESS,
    };
}

export function unlikePostFailure(error: string): UnlikePostFailureAction {
    return {
        type: unlikePostActionTypes.FAILURE,
        error,
    };
}
