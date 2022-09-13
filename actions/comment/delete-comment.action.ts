import {
    DeleteCommentRequestAction,
    DeleteCommentRequestPayload,
    DeleteCommentSuccessAction,
} from './delete-comment.interface';

export const DELETE_COMMENT_KEY = 'DELETE_COMMENT';

export const deleteCommentActionTypes = {
    REQUEST: `${DELETE_COMMENT_KEY}_REQUEST`,
    SUCCESS: `${DELETE_COMMENT_KEY}_SUCCESS`,
    FAILURE: `${DELETE_COMMENT_KEY}_FAILURE`,
};

export function deleteCommentRequest(
    payload: DeleteCommentRequestPayload,
): DeleteCommentRequestAction {
    return {
        type: deleteCommentActionTypes.REQUEST,
        payload,
    };
}

export function deleteCommentSuccess(): DeleteCommentSuccessAction {
    return {
        type: deleteCommentActionTypes.SUCCESS,
    };
}
