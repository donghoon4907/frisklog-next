import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    VerifyUserAction,
    VerifyUserPayload,
} from '../../actions/user/verify-user';
import { MUTATION_VERIFY_USER } from '../../graphql/mutation/user/verify-user';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { LoadUserAction } from '../../actions/user/load-user';

function verifyUserAPI(payload: VerifyUserPayload) {
    return client.request(MUTATION_VERIFY_USER, payload);
}

function* verifyUserSaga(action: UserAction): any {
    try {
        const response = yield call(verifyUserAPI, action.payload);

        console.log(response);
        yield put({
            type: VerifyUserAction.SUCCESS,
        });

        yield put({
            type: LoadUserAction.LOAD,
            payload: response,
        });

        setCookie(COOKIE_TOKEN_KEY, response.token);
    } catch (e) {
        yield put({
            type: VerifyUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 팔로우
export function* watchVerifyUser() {
    yield takeEvery(VerifyUserAction.REQUEST, verifyUserSaga);
}
