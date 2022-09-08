import { call, put, takeEvery } from 'redux-saga/effects';

import { DeletePostRequestAction } from '../../actions/post/delete-post.interface';
import { deletePost } from '../../services/postsService';
import {
    deletePostActionTypes,
    deletePostFailure,
    deletePostSuccess,
} from '../../actions/post/delete-post.action';

function* deletePostSaga(action: DeletePostRequestAction) {
    try {
        yield call(deletePost, action.payload);

        yield put(deletePostSuccess());
    } catch (e) {
        yield put(deletePostFailure((e as Error).message));
    }
}

export function* watchDeletePost() {
    yield takeEvery(deletePostActionTypes.REQUEST, deletePostSaga);
}
