import {
    RemovedPostsRequestAction,
    RemovedPostsRequestPayload,
    RemovedPostsSuccessAction,
    RemovedPostsSuccessPayload,
} from './removed-posts.interface';

export const REMOVED_POSTS_KEY = 'REMOVED_POSTS';

export const removedPostsActionTypes = {
    REQUEST: `${REMOVED_POSTS_KEY}_REQUEST`,
    SUCCESS: `${REMOVED_POSTS_KEY}_SUCCESS`,
    FAILURE: `${REMOVED_POSTS_KEY}_FAILURE`,
};

export function removedPostsRequest(
    payload: RemovedPostsRequestPayload,
): RemovedPostsRequestAction {
    return {
        type: removedPostsActionTypes.REQUEST,
        payload,
    };
}

export function removedPostsSuccess(
    payload: RemovedPostsSuccessPayload,
): RemovedPostsSuccessAction {
    return {
        type: removedPostsActionTypes.SUCCESS,
        payload,
    };
}
