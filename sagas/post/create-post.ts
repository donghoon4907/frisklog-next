import { call, put, takeEvery } from 'redux-saga/effects';

import { createPost } from '../../services/postsService';
import { CreatePostRequestAction } from '../../actions/post/create-post.interface';
import {
    createPostActionTypes,
    createPostSuccess,
} from '../../actions/post/create-post.action';

function* createPostSaga(action: CreatePostRequestAction) {
    yield call(createPost, action.payload);

    yield put(createPostSuccess());

    alert('포스트작성이 정상처리되었습니다.');

    window.location.reload();
}

export function* watchCreatePost() {
    yield takeEvery(createPostActionTypes.REQUEST, createPostSaga);
}
