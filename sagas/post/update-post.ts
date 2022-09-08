import { call, put, takeEvery } from 'redux-saga/effects';
import {
    updatePostActionTypes,
    updatePostFailure,
    updatePostSuccess,
} from '../../actions/post/update-post.action';

import { UpdatePostRequestAction } from '../../actions/post/update-post.interface';
import { updatePost } from '../../services/postsService';

function* updatePostSaga(action: UpdatePostRequestAction) {
    try {
        yield call(updatePost, action.payload);

        yield put(updatePostSuccess());
    } catch (e) {
        yield put(updatePostFailure((e as Error).message));
    }
}

export function* watchUpdatePost() {
    yield takeEvery(updatePostActionTypes.REQUEST, updatePostSaga);
}
