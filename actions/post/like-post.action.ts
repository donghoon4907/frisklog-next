import {
    LikePostRequestAction,
    LikePostRequestPayload,
    LikePostSuccessAction,
} from './like-post.interface';

export const LIKE_POST_KEY = 'LIKE_POST';

export const likePostActionTypes = {
    REQUEST: `${LIKE_POST_KEY}_REQUEST`,
    SUCCESS: `${LIKE_POST_KEY}_SUCCESS`,
    FAILURE: `${LIKE_POST_KEY}_FAILURE`,
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
