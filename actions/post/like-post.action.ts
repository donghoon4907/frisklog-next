import {
    LikePostFailureAction,
    LikePostRequestAction,
    LikePostRequestPayload,
    LikePostSuccessAction,
} from './like-post.interface';

const REQUEST_NAME = 'LIKE_POST';

export const likePostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function likePostRequest(
    payload: LikePostRequestPayload,
): LikePostRequestAction {
    return {
        type: likePostActionTypes.REQUEST,
        payload,
    };
}

export function likePostSuccess(): LikePostSuccessAction {
    return {
        type: likePostActionTypes.SUCCESS,
    };
}

export function likePostFailure(error: string): LikePostFailureAction {
    return {
        type: likePostActionTypes.FAILURE,
        error,
    };
}
