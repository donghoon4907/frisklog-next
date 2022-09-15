import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoginModal } from '../../actions/switch/login-modal.action';

import { setUser } from '../../actions/user/user.action';
import {
    verifyUserActionTypes,
    verifyUserSuccess,
} from '../../actions/user/verify-user.action';
import { VerifyUserRequestAction } from '../../actions/user/verify-user.interface';
import { updateClientHeader } from '../../graphql/client';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import * as usersService from '../../services/usersService';

function* verifyUserSaga(action: VerifyUserRequestAction): any {
    const { verify } = yield call(usersService.verifyUser, action.payload);

    yield put(verifyUserSuccess());

    const { token, ...userInfo } = verify;

    yield put(setUser(userInfo));

    setCookie(COOKIE_TOKEN_KEY, token);

    updateClientHeader();

    yield put(hideLoginModal());
}

export function* watchVerifyUser() {
    yield takeEvery(verifyUserActionTypes.REQUEST, verifyUserSaga);
}
