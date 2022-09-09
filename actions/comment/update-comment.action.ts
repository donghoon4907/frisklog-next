import {
    UpdateCommentFailureAction,
    UpdateCommentRequestAction,
    UpdateCommentRequestPayload,
    UpdateCommentSuccessAction,
} from './update-comment.interface';

const REQUEST_NAME = 'UPDATE_COMMENT';

export const updateCommentActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function updateCommentRequest(
    payload: UpdateCommentRequestPayload,
): UpdateCommentRequestAction {
    return {
        type: updateCommentActionTypes.REQUEST,
        payload,
    };
}

export function updateCommentSuccess(): UpdateCommentSuccessAction {
    return {
        type: updateCommentActionTypes.SUCCESS,
    };
}

export function updateCommentFailure(
    error: string,
): UpdateCommentFailureAction {
    return {
        type: updateCommentActionTypes.FAILURE,
        error,
    };
}
