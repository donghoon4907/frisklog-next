import { call, put, takeEvery } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { CreatePostRequestAction } from '../../actions/post/create-post.interface';
import {
    createPostActionTypes,
    createPostSuccess,
} from '../../actions/post/create-post.action';
import { hidePostModal } from '../../actions/switch/post-modal.action';

function* createPostSaga(action: CreatePostRequestAction) {
    const { addPost } = yield call(postsService.createPost, action.payload);

    yield put(createPostSuccess(addPost));

    alert('포스트가 정상적으로 작성되었습니다.');

    yield put(hidePostModal());
}

export function* watchCreatePost() {
    yield takeEvery(createPostActionTypes.REQUEST, createPostSaga);
}
