import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loginGithubActionTypes,
    loginGithubSuccess,
} from '../../actions/user/login-github.action';
import { LoginGithubRequestAction } from '../../actions/user/login-github.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { loginGithub } from '../../services/usersService';

function* loginGithubSaga(action: LoginGithubRequestAction): any {
    const response = yield call(loginGithub, action.payload);

    yield put(loginGithubSuccess());

    const { token, ...userInfo } = response.githubLogIn;

    yield put(setUser(userInfo));

    setCookie(COOKIE_TOKEN_KEY, token);

    updateClientHeader();
}

export function* watchLoginGithub() {
    yield takeEvery(loginGithubActionTypes.REQUEST, loginGithubSaga);
}
