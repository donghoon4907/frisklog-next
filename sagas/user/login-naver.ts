import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginNaverActionTypes,
    loginNaverSuccess,
} from '../../actions/user/login-naver.action';
import { LoginNaverRequestAction } from '../../actions/user/login-naver.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* loginNaverSaga(action: LoginNaverRequestAction) {
    const { payload } = action;

    const { naverLogIn } = yield call(usersService.loginNaver, payload);

    yield put(loginNaverSuccess());

    const { token, ...userInfo } = naverLogIn;

    yield put(setUser(userInfo));

    updateClientHeader({ token });

    return token;
}

export function* watchLoginNaver() {
    yield takeEvery(
        loginNaverActionTypes.REQUEST,
        mutationMiddleware(loginNaverSaga),
    );
}
