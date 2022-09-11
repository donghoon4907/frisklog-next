// import { FailurePayload } from '../../interfaces/error';
import {
    // CreatePostFailureAction,
    CreatePostRequestAction,
    CreatePostRequestPayload,
    CreatePostSuccessAction,
} from './create-post.interface';

export const CREATE_POST_KEY = 'CREATE_POST';

export const createPostActionTypes = {
    REQUEST: `${CREATE_POST_KEY}_REQUEST`,
    SUCCESS: `${CREATE_POST_KEY}_SUCCESS`,
    // FAILURE: `${CREATE_POST_KEY}_FAILURE`,
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

// export function createPostFailure(
//     error: FailurePayload,
// ): CreatePostFailureAction {
//     return {
//         type: createPostActionTypes.FAILURE,
//         error,
//     };
// }
