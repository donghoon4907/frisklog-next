import {
    UserPostsRequestAction,
    UserPostsRequestPayload,
    UserPostsSuccessAction,
    UserPostsSuccessPayload,
} from './user-posts.interface';

export const USER_POSTS_KEY = 'USER_POSTS';

export const userPostsActionTypes = {
    REQUEST: `${USER_POSTS_KEY}_REQUEST`,
    SUCCESS: `${USER_POSTS_KEY}_SUCCESS`,
    FAILURE: `${USER_POSTS_KEY}_FAILURE`,
};

export function userPostsRequest(
    payload: UserPostsRequestPayload,
): UserPostsRequestAction {
    return {
        type: userPostsActionTypes.REQUEST,
        payload,
    };
}

export function userPostsSuccess(
    payload: UserPostsSuccessPayload,
): UserPostsSuccessAction {
    return {
        type: userPostsActionTypes.SUCCESS,
        payload,
    };
}
