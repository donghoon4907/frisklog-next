import {
    LoginGithubFailureAction,
    LoginGithubRequestAction,
    LoginGithubRequestPayload,
    LoginGithubSuccessAction,
} from './login-github.interface';

const REQUEST_NAME = 'LOGIN_GITHUB';

export const loginGithubActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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
