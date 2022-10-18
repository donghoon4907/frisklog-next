import { call, put, takeEvery } from 'redux-saga/effects';

import { setUser } from '../../actions/user/user.action';
import {
    verifyUserActionTypes,
    verifyUserSuccess,
} from '../../actions/user/verify-user.action';
import { VerifyUserRequestAction } from '../../actions/user/verify-user.interface';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* verifyUserSaga(action: VerifyUserRequestAction) {
    const { verify } = yield call(usersService.verifyUser, action.payload);

    yield put(verifyUserSuccess());

    const { token, ...userInfo } = verify;

    yield put(setUser(userInfo));

    setCookie(COOKIE_TOKEN_KEY, token);

    location.replace('/');
}

export function* watchVerifyUser() {
    yield takeEvery(
        verifyUserActionTypes.REQUEST,
        mutationMiddleware(verifyUserSaga),
    );
}
