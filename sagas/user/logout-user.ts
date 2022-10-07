import { call, put, takeEvery } from 'redux-saga/effects';

import {
    logoutUserActionTypes,
    logoutUserSuccess,
} from '../../actions/user/logout-user.action';
import { LogoutUserRequestAction } from '../../actions/user/logout-user.interface';
import { initUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { deleteCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import * as usersService from '../../services/usersService';
import { UserStatus } from '../../types/status';

function* logoutUserSaga(action: LogoutUserRequestAction) {
    const { payload } = action;

    yield call(usersService.updateUser, {
        ...payload,
        status: UserStatus.OFFLINE,
    });

    yield put(logoutUserSuccess());

    yield put(initUser());

    deleteCookie(COOKIE_TOKEN_KEY);

    updateClientHeader({ token: null });

    payload.callbackFunc?.(null);
}

export function* watchLogoutUser() {
    yield takeEvery(logoutUserActionTypes.REQUEST, logoutUserSaga);
}
