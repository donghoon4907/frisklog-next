import {
    UpdateCommentRequestAction,
    UpdateCommentRequestPayload,
    UpdateCommentSuccessAction,
} from './update-comment.interface';

export const UPDATE_COMMENT_KEY = 'UPDATE_COMMENT';

export const updateCommentActionTypes = {
    REQUEST: `${UPDATE_COMMENT_KEY}_REQUEST`,
    SUCCESS: `${UPDATE_COMMENT_KEY}_SUCCESS`,
    FAILURE: `${UPDATE_COMMENT_KEY}_FAILURE`,
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
