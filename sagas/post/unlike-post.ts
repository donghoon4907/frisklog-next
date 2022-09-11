import { call, put, takeEvery } from 'redux-saga/effects';

import { UnlikePostRequestAction } from '../../actions/post/unlike-post.interface';
import { unlikePost } from '../../services/postsService';
import {
    unlikePostActionTypes,
    unlikePostSuccess,
} from '../../actions/post/unlike-post.action';

function* unlikePostSaga(action: UnlikePostRequestAction) {
    yield call(unlikePost, action.payload);

    yield put(unlikePostSuccess());
}

export function* watchUnlikePost() {
    yield takeEvery(unlikePostActionTypes.REQUEST, unlikePostSaga);
}
