import { call, put, takeEvery } from 'redux-saga/effects';
import {
    updatePostActionTypes,
    updatePostSuccess,
} from '../../actions/post/update-post.action';

import { UpdatePostRequestAction } from '../../actions/post/update-post.interface';
import { updatePost } from '../../services/postsService';

function* updatePostSaga(action: UpdatePostRequestAction) {
    yield call(updatePost, action.payload);

    yield put(updatePostSuccess());
}

export function* watchUpdatePost() {
    yield takeEvery(updatePostActionTypes.REQUEST, updatePostSaga);
}
