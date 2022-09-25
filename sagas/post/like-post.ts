import { call, put, takeEvery } from 'redux-saga/effects';

import {
    likePostActionTypes,
    likePostSuccess,
} from '../../actions/post/like-post.action';
import { LikePostRequestAction } from '../../actions/post/like-post.interface';
import { safe } from '../../lib/error/safe';
import { likePost } from '../../services/postsService';

function* likePostSaga(action: LikePostRequestAction) {
    yield call(likePost, action.payload);

    yield put(likePostSuccess());
}

export function* watchLikePost() {
    yield takeEvery(likePostActionTypes.REQUEST, safe(likePostSaga));
}
