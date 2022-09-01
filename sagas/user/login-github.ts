import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    LoginGithubAction,
    LoginGithubPayload,
} from '../../actions/user/login-github';
import { MUTATION_GITHUB_LOGIN } from '../../graphql/mutation/user/login-github';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { LoadUserAction } from '../../actions/user/load-user';

function loginGithubAPI(payload: LoginGithubPayload) {
    return client.request(MUTATION_GITHUB_LOGIN, payload);
}

function* loginGithubSaga(action: UserAction): any {
    try {
        const response = yield call(loginGithubAPI, action.payload);

        console.log(response);
        yield put({
            type: LoginGithubAction.SUCCESS,
        });

        yield put({
            type: LoadUserAction.LOAD,
            payload: response,
        });

        setCookie(COOKIE_TOKEN_KEY, response.token);
    } catch (e) {
        yield put({
            type: LoginGithubAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchLoginGithub() {
    yield takeEvery(LoginGithubAction.REQUEST, loginGithubSaga);
}
