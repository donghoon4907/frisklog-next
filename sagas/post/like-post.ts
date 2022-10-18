import { call, put, takeEvery } from 'redux-saga/effects';

import {
    likePostActionTypes,
    likePostSuccess,
} from '../../actions/post/like-post.action';
import { LikePostRequestAction } from '../../actions/post/like-post.interface';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import { likePost } from '../../services/postsService';

function* likePostSaga(action: LikePostRequestAction) {
    const { payload } = action;

    yield call(likePost, payload);

    yield put(likePostSuccess());

    return null;
}

export function* watchLikePost() {
    yield takeEvery(
        likePostActionTypes.REQUEST,
        mutationMiddleware(likePostSaga),
    );
}
