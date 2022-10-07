import {
    LogoutUserRequestAction,
    LogoutUserRequestPayload,
    LogoutUserSuccessAction,
} from './logout-user.interface';

const LOGOUT_USER_KEY = 'LOGOUT_USER';

export const logoutUserActionTypes = {
    REQUEST: `${LOGOUT_USER_KEY}_REQUEST`,
    SUCCESS: `${LOGOUT_USER_KEY}_SUCCESS`,
    FAILURE: `${LOGOUT_USER_KEY}_FAILURE`,
};

export function logoutUserRequest(
    payload: LogoutUserRequestPayload,
): LogoutUserRequestAction {
    return {
        type: logoutUserActionTypes.REQUEST,
        payload,
    };
}

export function logoutUserSuccess(): LogoutUserSuccessAction {
    return {
        type: logoutUserActionTypes.SUCCESS,
    };
}
