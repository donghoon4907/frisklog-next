import { call, put, takeEvery } from 'redux-saga/effects';

import { UnlikePostRequestAction } from '../../actions/post/unlike-post.interface';
import { unlikePost } from '../../services/postsService';
import {
    unlikePostActionTypes,
    unlikePostSuccess,
} from '../../actions/post/unlike-post.action';
import { safe } from '../../lib/error/safe';

function* unlikePostSaga(action: UnlikePostRequestAction) {
    const { payload } = action;

    yield call(unlikePost, payload);

    yield put(unlikePostSuccess());

    payload.callbackFunc?.(null);
}

export function* watchUnlikePost() {
    yield takeEvery(unlikePostActionTypes.REQUEST, safe(unlikePostSaga));
}
