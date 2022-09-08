import {
    UnlikePostFailureAction,
    UnlikePostRequestAction,
    UnlikePostRequestPayload,
    UnlikePostSuccessAction,
} from './unlike-post.interface';

const REQUEST_NAME = 'LIKE_POST';

export const unlikePostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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
