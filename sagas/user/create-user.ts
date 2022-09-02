import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    CreateUserAction,
    CreateUserPayload,
} from '../../actions/user/create-user';
import { MUTATION_CREATE_USER } from '../../graphql/mutation/user/create-user';

function createUserAPI(payload: CreateUserPayload) {
    return client.request(MUTATION_CREATE_USER, payload);
}

function* createUserSaga({ payload }: UserAction) {
    try {
        yield call(createUserAPI, payload);

        yield put({
            type: CreateUserAction.SUCCESS,
        });

        alert('회원가입이 정상처리되었습니다.');

        payload.callbackFunc('로그인');
    } catch (e) {
        yield put({
            type: CreateUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 사용자 생성
export function* watchCreateUser() {
    yield takeEvery(CreateUserAction.REQUEST, createUserSaga);
}
