import { call, put, takeEvery } from 'redux-saga/effects';

import { CreateUserRequestAction } from '../../actions/user/create-user.interface';
import {
    createUserActionTypes,
    createUserSuccess,
} from '../../actions/user/create-user.action';
import { createUser } from '../../services/usersService';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* createUserSaga({ payload }: CreateUserRequestAction) {
    yield call(createUser, payload);

    yield put(createUserSuccess());

    alert('회원가입이 정상처리되었습니다.');

    return null;
}

export function* watchCreateUser() {
    yield takeEvery(
        createUserActionTypes.REQUEST,
        mutationMiddleware(createUserSaga),
    );
}
