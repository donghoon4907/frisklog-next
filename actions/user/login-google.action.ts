import {
    LoginGoogleRequestAction,
    LoginGoogleRequestPayload,
    LoginGoogleSuccessAction,
} from './login-google.interface';

export const LOGIN_GOOGLE_KEY = 'LOGIN_GOOGLE';

export const loginGoogleActionTypes = {
    REQUEST: `${LOGIN_GOOGLE_KEY}_REQUEST`,
    SUCCESS: `${LOGIN_GOOGLE_KEY}_SUCCESS`,
    FAILURE: `${LOGIN_GOOGLE_KEY}_FAILURE`,
};

export function loginGoogleRequest(
    payload: LoginGoogleRequestPayload,
): LoginGoogleRequestAction {
    return {
        type: loginGoogleActionTypes.REQUEST,
        payload,
    };
}

export function loginGoogleSuccess(): LoginGoogleSuccessAction {
    return {
        type: loginGoogleActionTypes.SUCCESS,
    };
}
