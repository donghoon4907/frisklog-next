import { call, put, takeEvery } from 'redux-saga/effects';

import { setUser } from '../../actions/user/user.action';
import {
    verifyUserActionTypes,
    verifyUserFailure,
    verifyUserSuccess,
} from '../../actions/user/verify-user.action';
import { VerifyUserRequestAction } from '../../actions/user/verify-user.interface';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { verifyUser } from '../../services/usersService';

function* verifyUserSaga(action: VerifyUserRequestAction): any {
    try {
        const response = yield call(verifyUser, action.payload);

        yield put(verifyUserSuccess());

        const { token, ...userInfo } = response.verifyUser;

        yield put(setUser(userInfo));

        setCookie(COOKIE_TOKEN_KEY, token);
    } catch (e) {
        yield put(verifyUserFailure((e as Error).message));
    }
}

export function* watchVerifyUser() {
    yield takeEvery(verifyUserActionTypes.REQUEST, verifyUserSaga);
}
