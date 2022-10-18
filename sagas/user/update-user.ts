import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateUserActionTypes,
    updateUserSuccess,
} from '../../actions/user/update-user.action';
import { UpdateUserRequestAction } from '../../actions/user/update-user.interface';
import { setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* updateUserSaga(action: UpdateUserRequestAction) {
    const { payload } = action;

    const { updateUser } = yield call(usersService.updateUser, payload);

    const { token } = updateUser;

    yield put(updateUserSuccess());

    yield put(setUser(updateUser));

    setCookie(COOKIE_TOKEN_KEY, updateUser.token);

    updateClientHeader({ token });

    return null;
}

export function* watchUpdateUser() {
    yield takeEvery(
        updateUserActionTypes.REQUEST,
        mutationMiddleware(updateUserSaga),
    );
}
