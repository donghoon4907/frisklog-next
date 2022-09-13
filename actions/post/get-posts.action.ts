import {
    GetPostsRequestAction,
    GetPostsRequestPayload,
    GetPostsSuccessAction,
    GetPostsSuccessPayload,
} from './get-posts.interface';

export const GET_POSTS_KEY = 'GET_POSTS';

export const getPostsActionTypes = {
    REQUEST: `${GET_POSTS_KEY}_REQUEST`,
    SUCCESS: `${GET_POSTS_KEY}_SUCCESS`,
    FAILURE: `${GET_POSTS_KEY}_FAILURE`,
};

export function getPostsRequest(
    payload: GetPostsRequestPayload,
): GetPostsRequestAction {
    return {
        type: getPostsActionTypes.REQUEST,
        payload,
    };
}

export function getPostsSuccess(
    payload: GetPostsSuccessPayload,
): GetPostsSuccessAction {
    return {
        type: getPostsActionTypes.SUCCESS,
        payload,
    };
}
