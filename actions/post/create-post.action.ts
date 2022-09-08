import {
    CreatePostFailureAction,
    CreatePostRequestAction,
    CreatePostRequestPayload,
    CreatePostSuccessAction,
} from './create-post.interface';

const REQUEST_NAME = 'CREATE_POST';

export const createPostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function createPostRequest(
    payload: CreatePostRequestPayload,
): CreatePostRequestAction {
    return {
        type: createPostActionTypes.REQUEST,
        payload,
    };
}

export function createPostSuccess(): CreatePostSuccessAction {
    return {
        type: createPostActionTypes.SUCCESS,
    };
}

export function createPostFailure(error: string): CreatePostFailureAction {
    return {
        type: createPostActionTypes.FAILURE,
        error,
    };
}
