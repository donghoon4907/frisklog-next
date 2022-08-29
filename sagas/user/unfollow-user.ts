import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { UserAction } from '../../actions/user';
import {
    UnfollowUserAction,
    UnfollowUserPayload,
} from '../../actions/user/unfollow-user';
import { MUTATION_UNFOLLOW_USER } from '../../graphql/mutation/user/unfollow-user';

function unfollowUserAPI(payload: UnfollowUserPayload) {
    return client.request(MUTATION_UNFOLLOW_USER, payload);
}

function* unfollowUserSaga(action: UserAction) {
    try {
        yield call(unfollowUserAPI, action.payload);

        yield put({
            type: UnfollowUserAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: UnfollowUserAction.FAILURE,
            error: (e as Error).message,
        });
    }
}
// 팔로우
export function* watchUnfollowUser() {
    yield takeEvery(UnfollowUserAction.REQUEST, unfollowUserSaga);
}
