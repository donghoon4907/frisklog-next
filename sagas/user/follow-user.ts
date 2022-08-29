import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    FollowUserAction,
    FollowUserPayload,
} from '../../actions/user/follow-user';
import { MUTATION_FOLLOW_USER } from '../../graphql/mutation/user/follow-user';

function followUserAPI(payload: FollowUserPayload) {
    return client.request(MUTATION_FOLLOW_USER, payload);
}

function* followUserSaga(action: UserAction) {
    try {
        yield call(followUserAPI, action.payload);

        yield put({
            type: FollowUserAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: FollowUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 팔로우
export function* watchFollowUser() {
    yield takeEvery(FollowUserAction.REQUEST, followUserSaga);
}
