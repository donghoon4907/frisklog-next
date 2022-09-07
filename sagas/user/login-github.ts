import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loginGithubActionTypes,
    loginGithubFailure,
    loginGithubSuccess,
} from '../../actions/user/login-github.action';
import { LoginGithubRequestAction } from '../../actions/user/login-github.interface';
import { setUserRequest } from '../../actions/user/set-user.action';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { loginGithub } from '../../services/usersService';

function* loginGithubSaga(action: LoginGithubRequestAction): any {
    try {
        const response = yield call(loginGithub, action.payload);

        yield put(loginGithubSuccess());

        const { token, ...userInfo } = response.githubLogIn;

        yield put(setUserRequest(userInfo));

        setCookie(COOKIE_TOKEN_KEY, token);
    } catch (e) {
        yield put(loginGithubFailure((e as Error).message));
    }
}

export function* watchLoginGithub() {
    yield takeEvery(loginGithubActionTypes.REQUEST, loginGithubSaga);
}
