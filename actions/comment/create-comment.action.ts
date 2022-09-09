import {
    CreateCommentFailureAction,
    CreateCommentRequestAction,
    CreateCommentRequestPayload,
    CreateCommentSuccessAction,
} from './create-comment.interface';

const REQUEST_NAME = 'CREATE_COMMENT';

export const createCommentActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function createCommentRequest(
    payload: CreateCommentRequestPayload,
): CreateCommentRequestAction {
    return {
        type: createCommentActionTypes.REQUEST,
        payload,
    };
}

export function createCommentSuccess(): CreateCommentSuccessAction {
    return {
        type: createCommentActionTypes.SUCCESS,
    };
}

export function createCommentFailure(
    error: string,
): CreateCommentFailureAction {
    return {
        type: createCommentActionTypes.FAILURE,
        error,
    };
}
