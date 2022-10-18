import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginGithubActionTypes,
    loginGithubSuccess,
} from '../../actions/user/login-github.action';
import { LoginGithubRequestAction } from '../../actions/user/login-github.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* loginGithubSaga(action: LoginGithubRequestAction) {
    const { payload } = action;

    const { githubLogIn } = yield call(usersService.loginGithub, payload);

    yield put(loginGithubSuccess());

    const { token, ...userInfo } = githubLogIn;

    yield put(setUser(userInfo));

    updateClientHeader({ token });

    return token;
}

export function* watchLoginGithub() {
    yield takeEvery(
        loginGithubActionTypes.REQUEST,
        mutationMiddleware(loginGithubSaga),
    );
}
