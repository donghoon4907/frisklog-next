import {
    GetUserRequestAction,
    GetUserRequestPayload,
    GetUserSuccessAction,
    GetUserSuccessPayload,
} from './get-user.interface';

export const HOME_POSTS_KEY = 'HOME_POSTS';

export const getUserActionTypes = {
    REQUEST: `${HOME_POSTS_KEY}_REQUEST`,
    SUCCESS: `${HOME_POSTS_KEY}_SUCCESS`,
    FAILURE: `${HOME_POSTS_KEY}_FAILURE`,
};

export function getUserRequest(
    payload: GetUserRequestPayload,
): GetUserRequestAction {
    return {
        type: getUserActionTypes.REQUEST,
        payload,
    };
}

export function getUserSuccess(
    payload: GetUserSuccessPayload,
): GetUserSuccessAction {
    return {
        type: getUserActionTypes.SUCCESS,
        payload,
    };
}
