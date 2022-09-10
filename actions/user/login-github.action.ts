import {
    LoginGithubFailureAction,
    LoginGithubRequestAction,
    LoginGithubRequestPayload,
    LoginGithubSuccessAction,
} from './login-github.interface';

export const LOGIN_GITHUB_KEY = 'LOGIN_GITHUB';

export const loginGithubActionTypes = {
    REQUEST: `${LOGIN_GITHUB_KEY}_REQUEST`,
    SUCCESS: `${LOGIN_GITHUB_KEY}_SUCCESS`,
    FAILURE: `${LOGIN_GITHUB_KEY}_FAILURE`,
};

export function loginGithubRequest(
    payload: LoginGithubRequestPayload,
): LoginGithubRequestAction {
    return {
        type: loginGithubActionTypes.REQUEST,
        payload,
    };
}

export function loginGithubSuccess(): LoginGithubSuccessAction {
    return {
        type: loginGithubActionTypes.SUCCESS,
    };
}

export function loginGithubFailure(error: string): LoginGithubFailureAction {
    return {
        type: loginGithubActionTypes.FAILURE,
        error,
    };
}
