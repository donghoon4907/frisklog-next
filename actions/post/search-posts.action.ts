import {
    SearchPostsRequestAction,
    SearchPostsRequestPayload,
    SearchPostsSuccessAction,
    SearchPostsSuccessPayload,
} from './search-posts.interface';

export const SEARCH_POSTS_KEY = 'SEARCH_POSTS';

export const searchPostsActionTypes = {
    REQUEST: `${SEARCH_POSTS_KEY}_REQUEST`,
    SUCCESS: `${SEARCH_POSTS_KEY}_SUCCESS`,
    FAILURE: `${SEARCH_POSTS_KEY}_FAILURE`,
};

export function searchPostsRequest(
    payload: SearchPostsRequestPayload,
): SearchPostsRequestAction {
    return {
        type: searchPostsActionTypes.REQUEST,
        payload,
    };
}

export function searchPostsSuccess(
    payload: SearchPostsSuccessPayload,
): SearchPostsSuccessAction {
    return {
        type: searchPostsActionTypes.SUCCESS,
        payload,
    };
}
