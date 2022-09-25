import { call, put, takeLatest } from 'redux-saga/effects';

import {
    getUserActionTypes,
    getUserSuccess,
} from '../../actions/user/get-user.action';
import { GetUserRequestAction } from '../../actions/user/get-user.interface';
import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';

function* getUserSaga(action: GetUserRequestAction) {
    const { user } = yield call(usersService.getUser, action.payload);

    yield put(getUserSuccess(user));
}

export function* watchGetUser() {
    yield takeLatest(getUserActionTypes.REQUEST, getUserSaga);
}
