import { call, put, takeEvery } from 'redux-saga/effects';

import { setUser } from '../../actions/user/user.action';
import {
    verifyUserActionTypes,
    verifyUserSuccess,
} from '../../actions/user/verify-user.action';
import { VerifyUserRequestAction } from '../../actions/user/verify-user.interface';
import { updateClientHeader } from '../../graphql/client';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { verifyUser } from '../../services/usersService';

function* verifyUserSaga(action: VerifyUserRequestAction): any {
    const response = yield call(verifyUser, action.payload);

    yield put(verifyUserSuccess());

    const { token, ...userInfo } = response.verifyUser;

    yield put(setUser(userInfo));

    setCookie(COOKIE_TOKEN_KEY, token);

    updateClientHeader();
}

export function* watchVerifyUser() {
    yield takeEvery(verifyUserActionTypes.REQUEST, verifyUserSaga);
}
