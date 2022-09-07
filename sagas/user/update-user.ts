import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateUserActionTypes,
    updateUserFailure,
    updateUserSuccess,
} from '../../actions/user/update-user.action';
import { UpdateUserRequestAction } from '../../actions/user/update-user.interface';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { updateUser } from '../../services/usersService';

function* updateUserSaga(action: UpdateUserRequestAction): any {
    try {
        const response = yield call(updateUser, action.payload);

        yield put(updateUserSuccess());

        setCookie(COOKIE_TOKEN_KEY, response.updateUser.token);
    } catch (e) {
        yield put(updateUserFailure((e as Error).message));
    }
}

export function* watchUpdateUser() {
    yield takeEvery(updateUserActionTypes.REQUEST, updateUserSaga);
}
