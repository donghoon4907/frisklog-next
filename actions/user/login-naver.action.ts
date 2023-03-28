import {
    LoginNaverRequestAction,
    LoginNaverRequestPayload,
    LoginNaverSuccessAction,
} from './login-naver.interface';

export const LOGIN_NAVER_KEY = 'LOGIN_NAVER';

export const loginNaverActionTypes = {
    REQUEST: `${LOGIN_NAVER_KEY}_REQUEST`,
    SUCCESS: `${LOGIN_NAVER_KEY}_SUCCESS`,
    FAILURE: `${LOGIN_NAVER_KEY}_FAILURE`,
};

export function loginNaverRequest(
    payload: LoginNaverRequestPayload,
): LoginNaverRequestAction {
    return {
        type: loginNaverActionTypes.REQUEST,
        payload,
    };
}

export function loginNaverSuccess(): LoginNaverSuccessAction {
    return {
        type: loginNaverActionTypes.SUCCESS,
    };
}
