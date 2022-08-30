import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import {
    UnlikePostAction,
    UnlikePostPayload,
} from '../../actions/post/unlike-post';
import { MUTATION_UNLIKE_POST } from '../../graphql/mutation/post/unlike-post';

function unlikePostAPI(payload: UnlikePostPayload) {
    return client.request(MUTATION_UNLIKE_POST, payload);
}

function* unlikePostSaga(action: PostAction) {
    try {
        yield call(unlikePostAPI, action.payload);

        yield put({
            type: UnlikePostAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: UnlikePostAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchUnlikePost() {
    yield takeEvery(UnlikePostAction.REQUEST, unlikePostSaga);
}
