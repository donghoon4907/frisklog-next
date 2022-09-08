import { call, put, takeEvery } from 'redux-saga/effects';
import {
    likePostActionTypes,
    likePostFailure,
    likePostSuccess,
} from '../../actions/post/like-post.action';
import { LikePostRequestAction } from '../../actions/post/like-post.interface';
import { likePost } from '../../services/postsService';

function* likePostSaga(action: LikePostRequestAction) {
    try {
        yield call(likePost, action.payload);

        yield put(likePostSuccess());
    } catch (e) {
        yield put(likePostFailure((e as Error).message));
    }
}

export function* watchLikePost() {
    yield takeEvery(likePostActionTypes.REQUEST, likePostSaga);
}
