import { call, put, takeEvery } from 'redux-saga/effects';

import { createPost } from '../../services/postsService';
import { CreatePostRequestAction } from '../../actions/post/create-post.interface';
import {
    createPostActionTypes,
    createPostFailure,
    createPostSuccess,
} from '../../actions/post/create-post.action';

function* createPostSaga(action: CreatePostRequestAction) {
    try {
        yield call(createPost, action.payload);

        yield put(createPostSuccess());
    } catch (e) {
        yield put(createPostFailure((e as Error).message));
    }
}

export function* watchCreatePost() {
    yield takeEvery(createPostActionTypes.REQUEST, createPostSaga);
}
