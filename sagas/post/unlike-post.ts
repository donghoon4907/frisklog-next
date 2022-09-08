import { call, put, takeEvery } from 'redux-saga/effects';

import { UnlikePostRequestAction } from '../../actions/post/unlike-post.interface';
import { unlikePost } from '../../services/postsService';
import {
    unlikePostActionTypes,
    unlikePostFailure,
    unlikePostSuccess,
} from '../../actions/post/unlike-post.action';

function* unlikePostSaga(action: UnlikePostRequestAction) {
    try {
        yield call(unlikePost, action.payload);

        yield put(unlikePostSuccess());
    } catch (e) {
        yield put(unlikePostFailure((e as Error).message));
    }
}

export function* watchUnlikePost() {
    yield takeEvery(unlikePostActionTypes.REQUEST, unlikePostSaga);
}
