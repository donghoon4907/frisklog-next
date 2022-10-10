import { call, put, takeLatest } from 'redux-saga/effects';

import * as usersService from '../../services/usersService';
import {
    searchUsersActionTypes,
    searchUsersSuccess,
} from '../../actions/user/search-users.action';
import { SearchUsersRequestAction } from '../../actions/user/search-users.interface';

function* searchUsersSaga(action: SearchUsersRequestAction) {
    const { users } = yield call(usersService.getUsers, action.payload);

    yield put(searchUsersSuccess(users));
}

export function* watchSearchUsers() {
    yield takeLatest(searchUsersActionTypes.REQUEST, searchUsersSaga);
}
