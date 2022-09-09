import {
    DeleteCommentFailureAction,
    DeleteCommentRequestAction,
    DeleteCommentRequestPayload,
    DeleteCommentSuccessAction,
} from './delete-comment.interface';

const REQUEST_NAME = 'DELETE_COMMENT';

export const deleteCommentActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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

export function deleteCommentFailure(
    error: string,
): DeleteCommentFailureAction {
    return {
        type: deleteCommentActionTypes.FAILURE,
        error,
    };
}
