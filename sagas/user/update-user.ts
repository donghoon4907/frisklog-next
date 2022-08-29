import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    UpdateUserAction,
    UpdateUserPayload,
} from '../../actions/user/update-user';
import { MUTATION_UPDATE_USER } from '../../graphql/mutation/user/update-user';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';

function updateUserAPI(payload: UpdateUserPayload) {
    return client.request(MUTATION_UPDATE_USER, payload);
}

function* updateUserSaga(action: UserAction): any {
    try {
        const response = yield call(updateUserAPI, action.payload);

        console.log(response);
        yield put({
            type: UpdateUserAction.SUCCESS,
            payload: response,
        });

        setCookie(COOKIE_TOKEN_KEY, response.token);
    } catch (e) {
        yield put({
            type: UpdateUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 사용자 정보 수정
export function* watchUpdateUser() {
    yield takeEvery(UpdateUserAction.REQUEST, updateUserSaga);
}
