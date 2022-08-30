import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import { LikePostAction, LikePostPayload } from '../../actions/post/like-post';
import { MUTATION_LIKE_POST } from '../../graphql/mutation/post/like-post';

function likePostAPI(payload: LikePostPayload) {
    return client.request(MUTATION_LIKE_POST, payload);
}

function* likePostSaga(action: PostAction) {
    try {
        yield call(likePostAPI, action.payload);

        yield put({
            type: LikePostAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: LikePostAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchLikePost() {
    yield takeEvery(LikePostAction.REQUEST, likePostSaga);
}
