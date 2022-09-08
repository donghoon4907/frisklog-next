import {
    GetPostsFailureAction,
    GetPostsRequestAction,
    GetPostsRequestPayload,
    GetPostsSuccessAction,
    GetPostsSuccessPayload,
} from './get-posts.interface';

const REQUEST_NAME = 'GET_POSTS';

export const getPostsActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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

export function getPostsFailure(error: string): GetPostsFailureAction {
    return {
        type: getPostsActionTypes.FAILURE,
        error,
    };
}
