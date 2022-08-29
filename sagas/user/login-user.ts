import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    LoginUserAction,
    LoginUserPayload,
} from '../../actions/user/login-user';
import { MUTATION_LOGIN_USER } from '../../graphql/mutation/user/login-user';

function loginUserAPI(payload: LoginUserPayload) {
    return client.request(MUTATION_LOGIN_USER, payload);
}

function* loginUserSaga(action: UserAction) {
    try {
        yield call(loginUserAPI, action.payload);

        yield put({
            type: LoginUserAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LoginUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 팔로우
export function* watchLoginUser() {
    yield takeEvery(LoginUserAction.REQUEST, loginUserSaga);
}
