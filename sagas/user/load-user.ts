import { call, put, takeLatest } from 'redux-saga/effects';

import { GetUserRequestAction } from '../../actions/user/get-user.interface';
import {
    loadUserActionTypes,
    loadUserSuccess,
} from '../../actions/user/load-user.action';
import { setUser } from '../../actions/user/user.action';
import * as usersService from '../../services/usersService';

function* loadUserSaga(action: GetUserRequestAction) {
    const { user } = yield call(usersService.getUser, action.payload);

    yield put(loadUserSuccess());

    yield put(setUser(user));
}

export function* watchLoadUser() {
    yield takeLatest(loadUserActionTypes.REQUEST, loadUserSaga);
}
