import {
    DeleteCommentRequestAction,
    DeleteCommentRequestPayload,
    DeleteCommentSuccessAction,
    DeleteCommentSuccessPayload,
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

export function deleteCommentSuccess(
    payload: DeleteCommentSuccessPayload,
): DeleteCommentSuccessAction {
    return {
        type: deleteCommentActionTypes.SUCCESS,
        payload,
    };
}
