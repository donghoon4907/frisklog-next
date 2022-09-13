import {
    CreateCommentRequestAction,
    CreateCommentRequestPayload,
    CreateCommentSuccessAction,
} from './create-comment.interface';

export const CREATE_COMMENT_KEY = 'CREATE_COMMENT';

export const createCommentActionTypes = {
    REQUEST: `${CREATE_COMMENT_KEY}_REQUEST`,
    SUCCESS: `${CREATE_COMMENT_KEY}_SUCCESS`,
    FAILURE: `${CREATE_COMMENT_KEY}_FAILURE`,
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
