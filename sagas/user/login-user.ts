import { call, put, takeEvery } from 'redux-saga/effects';

import {
    loginUserActionTypes,
    loginUserSuccess,
} from '../../actions/user/login-user.action';
import { LoginUserRequestAction } from '../../actions/user/login-user.interface';
import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';

function* loginUserSaga(action: LoginUserRequestAction) {
    yield call(usersService.loginUser, action.payload);

    yield put(loginUserSuccess());

    alert('이메일로 보안문자를 전송했습니다.');

    action.payload.callbackFunc();
}

export function* watchLoginUser() {
    yield takeEvery(loginUserActionTypes.REQUEST, safe(loginUserSaga));
}
