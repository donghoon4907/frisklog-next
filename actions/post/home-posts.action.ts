import {
    HomePostsRequestAction,
    HomePostsRequestPayload,
    HomePostsSuccessAction,
    HomePostsSuccessPayload,
} from './home-posts.interface';

export const HOME_POSTS_KEY = 'HOME_POSTS';

export const homePostsActionTypes = {
    REQUEST: `${HOME_POSTS_KEY}_REQUEST`,
    SUCCESS: `${HOME_POSTS_KEY}_SUCCESS`,
    FAILURE: `${HOME_POSTS_KEY}_FAILURE`,
};

export function homePostsRequest(
    payload: HomePostsRequestPayload,
): HomePostsRequestAction {
    return {
        type: homePostsActionTypes.REQUEST,
        payload,
    };
}

export function homePostsSuccess(
    payload: HomePostsSuccessPayload,
): HomePostsSuccessAction {
    return {
        type: homePostsActionTypes.SUCCESS,
        payload,
    };
}
