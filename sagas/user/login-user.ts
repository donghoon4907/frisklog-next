import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginUserActionTypes,
    loginUserSuccess,
} from '../../actions/user/login-user.action';
import { LoginUserRequestAction } from '../../actions/user/login-user.interface';
import { loginUser } from '../../services/usersService';

function* loginUserSaga(action: LoginUserRequestAction) {
    yield call(loginUser, action.payload);

    yield put(loginUserSuccess());
}

export function* watchLoginUser() {
    yield takeEvery(loginUserActionTypes.REQUEST, loginUserSaga);
}
