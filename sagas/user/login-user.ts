import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginUserActionTypes,
    loginUserFailure,
    loginUserSuccess,
} from '../../actions/user/login-user.action';
import { LoginUserRequestAction } from '../../actions/user/login-user.interface';
import { loginUser } from '../../services/usersService';

function* loginUserSaga(action: LoginUserRequestAction) {
    try {
        yield call(loginUser, action.payload);

        yield put(loginUserSuccess());
    } catch (e) {
        yield put(loginUserFailure((e as Error).message));
    }
}

export function* watchLoginUser() {
    yield takeEvery(loginUserActionTypes.REQUEST, loginUserSaga);
}
