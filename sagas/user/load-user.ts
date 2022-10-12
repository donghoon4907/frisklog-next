import { call, put, takeLatest } from 'redux-saga/effects';

import {
    loadUserActionTypes,
    loadUserSuccess,
} from '../../actions/user/load-user.action';
import { LoadUserRequestAction } from '../../actions/user/load-user.interface';
import { setUser } from '../../actions/user/user.action';
import * as usersService from '../../services/usersService';

function* loadUserSaga(action: LoadUserRequestAction) {
    const { loadUser } = yield call(usersService.loadUser);

    yield put(loadUserSuccess());

    yield put(setUser(loadUser));
}

export function* watchLoadUser() {
    yield takeLatest(loadUserActionTypes.REQUEST, loadUserSaga);
}
