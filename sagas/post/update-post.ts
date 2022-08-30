import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import {
    UpdatePostAction,
    UpdatePostPayload,
} from '../../actions/post/update-post';
import { MUTATION_UPDATE_POST } from '../../graphql/mutation/post/update-post';

function updatePostAPI(payload: UpdatePostPayload) {
    return client.request(MUTATION_UPDATE_POST, payload);
}

function* updatePostSaga(action: PostAction) {
    try {
        yield call(updatePostAPI, action.payload);

        yield put({
            type: UpdatePostAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: UpdatePostAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchUpdatePost() {
    yield takeEvery(UpdatePostAction.REQUEST, updatePostSaga);
}
