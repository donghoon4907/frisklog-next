import {
    LoginUserFailureAction,
    LoginUserRequestAction,
    LoginUserRequestPayload,
    LoginUserSuccessAction,
} from './login-user.interface';

const REQUEST_NAME = 'LOGIN_USER';

export const loginUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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
