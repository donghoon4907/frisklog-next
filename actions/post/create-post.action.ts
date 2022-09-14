import {
    CreatePostRequestAction,
    CreatePostRequestPayload,
    CreatePostSuccessAction,
    CreatePostSuccessPayload,
} from './create-post.interface';

export const CREATE_POST_KEY = 'CREATE_POST';

export const createPostActionTypes = {
    REQUEST: `${CREATE_POST_KEY}_REQUEST`,
    SUCCESS: `${CREATE_POST_KEY}_SUCCESS`,
    FAILURE: `${CREATE_POST_KEY}_FAILURE`,
};

export function createPostRequest(
    payload: CreatePostRequestPayload,
): CreatePostRequestAction {
    return {
        type: createPostActionTypes.REQUEST,
        payload,
    };
}

export function createPostSuccess(
    payload: CreatePostSuccessPayload,
): CreatePostSuccessAction {
    return {
        type: createPostActionTypes.SUCCESS,
        payload,
    };
}
