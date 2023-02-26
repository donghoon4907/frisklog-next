import {
    LikedPostsRequestAction,
    LikedPostsRequestPayload,
    LikedPostsSuccessAction,
    LikedPostsSuccessPayload,
} from './liked-posts.interface';

export const LIKED_POSTS_KEY = 'LIKED_POSTS';

export const likedPostsActionTypes = {
    REQUEST: `${LIKED_POSTS_KEY}_REQUEST`,
    SUCCESS: `${LIKED_POSTS_KEY}_SUCCESS`,
    FAILURE: `${LIKED_POSTS_KEY}_FAILURE`,
};

export function likedPostsRequest(
    payload: LikedPostsRequestPayload,
): LikedPostsRequestAction {
    return {
        type: likedPostsActionTypes.REQUEST,
        payload,
    };
}

export function likedPostsSuccess(
    payload: LikedPostsSuccessPayload,
): LikedPostsSuccessAction {
    return {
        type: likedPostsActionTypes.SUCCESS,
        payload,
    };
}
