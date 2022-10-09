import {
    CategoryPostsRequestAction,
    CategoryPostsRequestPayload,
    CategoryPostsSuccessAction,
    CategoryPostsSuccessPayload,
} from './category-posts.interface';

export const CATEGORY_POSTS_KEY = 'CATEGORY_POSTS';

export const categoryPostsActionTypes = {
    REQUEST: `${CATEGORY_POSTS_KEY}_REQUEST`,
    SUCCESS: `${CATEGORY_POSTS_KEY}_SUCCESS`,
    FAILURE: `${CATEGORY_POSTS_KEY}_FAILURE`,
};

export function categoryPostsRequest(
    payload: CategoryPostsRequestPayload,
): CategoryPostsRequestAction {
    return {
        type: categoryPostsActionTypes.REQUEST,
        payload,
    };
}

export function categoryPostsSuccess(
    payload: CategoryPostsSuccessPayload,
): CategoryPostsSuccessAction {
    return {
        type: categoryPostsActionTypes.SUCCESS,
        payload,
    };
}
