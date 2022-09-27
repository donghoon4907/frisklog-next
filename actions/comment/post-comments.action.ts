import {
    PostCommentsRequestAction,
    PostCommentsRequestPayload,
    PostCommentsSuccessAction,
    PostCommentsSuccessPayload,
} from './post-comments.interface';

export const POST_COMMENTS_KEY = 'POST_COMMENTS';

export const postCommentsActionTypes = {
    REQUEST: `${POST_COMMENTS_KEY}_REQUEST`,
    SUCCESS: `${POST_COMMENTS_KEY}_SUCCESS`,
    FAILURE: `${POST_COMMENTS_KEY}_FAILURE`,
};

export function postCommentsRequest(
    payload: PostCommentsRequestPayload,
): PostCommentsRequestAction {
    return {
        type: postCommentsActionTypes.REQUEST,
        payload,
    };
}

export function postCommentsSuccess(
    payload: PostCommentsSuccessPayload,
): PostCommentsSuccessAction {
    return {
        type: postCommentsActionTypes.SUCCESS,
        payload,
    };
}
