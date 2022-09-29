import {
    FollowingPostsRequestAction,
    FollowingPostsRequestPayload,
    FollowingPostsSuccessAction,
    FollowingPostsSuccessPayload,
} from './following-posts.interface';

export const FOLLOWING_POSTS_KEY = 'HOME_POSTS';

export const followingPostsActionTypes = {
    REQUEST: `${FOLLOWING_POSTS_KEY}_REQUEST`,
    SUCCESS: `${FOLLOWING_POSTS_KEY}_SUCCESS`,
    FAILURE: `${FOLLOWING_POSTS_KEY}_FAILURE`,
};

export function followingPostsRequest(
    payload: FollowingPostsRequestPayload,
): FollowingPostsRequestAction {
    return {
        type: followingPostsActionTypes.REQUEST,
        payload,
    };
}

export function followingPostsSuccess(
    payload: FollowingPostsSuccessPayload,
): FollowingPostsSuccessAction {
    return {
        type: followingPostsActionTypes.SUCCESS,
        payload,
    };
}
