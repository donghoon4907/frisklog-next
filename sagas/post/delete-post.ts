import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import {
    DeletePostAction,
    DeletePostPayload,
} from '../../actions/post/delete-post';
import { MUTATION_DELETE_POST } from '../../graphql/mutation/post/delete-post';

function deletePostAPI(payload: DeletePostPayload) {
    return client.request(MUTATION_DELETE_POST, payload);
}

function* deletePostSaga(action: PostAction) {
    try {
        yield call(deletePostAPI, action.payload);

        yield put({
            type: DeletePostAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: DeletePostAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchDeletePost() {
    yield takeEvery(DeletePostAction.REQUEST, deletePostSaga);
}
