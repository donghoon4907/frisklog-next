import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateUserActionTypes,
    updateUserSuccess,
} from '../../actions/user/update-user.action';
import { UpdateUserRequestAction } from '../../actions/user/update-user.interface';
import { initUser, setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { deleteCookie, setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';
import { UserStatus } from '../../types/status';

function* updateUserSaga(action: UpdateUserRequestAction) {
    const { updateUser } = yield call(usersService.updateUser, action.payload);

    const { token } = updateUser;

    yield put(updateUserSuccess());

    if (action.payload.status === UserStatus.OFFLINE) {
        yield put(initUser());

        deleteCookie(COOKIE_TOKEN_KEY);
    } else {
        yield put(setUser(updateUser));

        setCookie(COOKIE_TOKEN_KEY, updateUser.token);
    }

    updateClientHeader({ token });
}

export function* watchUpdateUser() {
    yield takeEvery(updateUserActionTypes.REQUEST, safe(updateUserSaga));
}
