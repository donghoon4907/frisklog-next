import { call, put, takeEvery } from 'redux-saga/effects';

import { UnlikePostRequestAction } from '../../actions/post/unlike-post.interface';
import { unlikePost } from '../../services/postsService';
import {
    unlikePostActionTypes,
    unlikePostSuccess,
} from '../../actions/post/unlike-post.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* unlikePostSaga(action: UnlikePostRequestAction) {
    const { payload } = action;

    yield call(unlikePost, payload);

    yield put(unlikePostSuccess());

    return null;
}

export function* watchUnlikePost() {
    yield takeEvery(
        unlikePostActionTypes.REQUEST,
        mutationMiddleware(unlikePostSaga),
    );
}
