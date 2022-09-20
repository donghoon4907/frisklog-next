import {
    GetUserRequestAction,
    GetUserRequestPayload,
    GetUserSuccessAction,
    GetUserSuccessPayload,
} from './get-user.interface';

export const GET_USER_KEY = 'GET_USER';

export const getUserActionTypes = {
    REQUEST: `${GET_USER_KEY}_REQUEST`,
    SUCCESS: `${GET_USER_KEY}_SUCCESS`,
    FAILURE: `${GET_USER_KEY}_FAILURE`,
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
