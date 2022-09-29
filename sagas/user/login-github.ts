import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loginGithubActionTypes,
    loginGithubSuccess,
} from '../../actions/user/login-github.action';
import { LoginGithubRequestAction } from '../../actions/user/login-github.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';

function* loginGithubSaga(action: LoginGithubRequestAction): any {
    const { githubLogIn } = yield call(
        usersService.loginGithub,
        action.payload,
    );

    yield put(loginGithubSuccess());

    const { token, ...userInfo } = githubLogIn;

    yield put(setUser(userInfo));

    updateClientHeader();

    action.payload.callbackFunc?.(token);
}

export function* watchLoginGithub() {
    yield takeEvery(loginGithubActionTypes.REQUEST, safe(loginGithubSaga));
}
