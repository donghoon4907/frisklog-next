import {
    LoginUserFailureAction,
    LoginUserRequestAction,
    LoginUserRequestPayload,
    LoginUserSuccessAction,
} from './login-user.interface';

export const LOGIN_USER_KEY = 'LOGIN_USER';

export const loginUserActionTypes = {
    REQUEST: `${LOGIN_USER_KEY}_REQUEST`,
    SUCCESS: `${LOGIN_USER_KEY}_SUCCESS`,
    FAILURE: `${LOGIN_USER_KEY}_FAILURE`,
};

export function loginUserRequest(
    payload: LoginUserRequestPayload,
): LoginUserRequestAction {
    return {
        type: loginUserActionTypes.REQUEST,
        payload,
    };
}

export function loginUserSuccess(): LoginUserSuccessAction {
    return {
        type: loginUserActionTypes.SUCCESS,
    };
}

export function loginUserFailure(error: string): LoginUserFailureAction {
    return {
        type: loginUserActionTypes.FAILURE,
        error,
    };
}
