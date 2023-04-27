import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginGoogleActionTypes,
    loginGoogleSuccess,
} from '../../actions/user/login-google.action';
import { LoginGoogleRequestAction } from '../../actions/user/login-google.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* loginGoogleSaga(action: LoginGoogleRequestAction) {
    const { payload } = action;

    const { googleLogIn } = yield call(usersService.loginGoogle, payload);

    yield put(loginGoogleSuccess());

    const { token, ...userInfo } = googleLogIn;

    yield put(setUser(userInfo));

    updateClientHeader({ token });

    return token;
}

export function* watchLoginGoogle() {
    yield takeEvery(
        loginGoogleActionTypes.REQUEST,
        mutationMiddleware(loginGoogleSaga),
    );
}
