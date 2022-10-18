import { call, put, takeEvery } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { CreatePostRequestAction } from '../../actions/post/create-post.interface';
import {
    createPostActionTypes,
    createPostSuccess,
} from '../../actions/post/create-post.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* createPostSaga(action: CreatePostRequestAction) {
    const { payload } = action;

    const { addPost } = yield call(postsService.createPost, payload);

    yield put(createPostSuccess(addPost));

    alert('포스트가 정상적으로 작성되었습니다.');

    return null;
}

export function* watchCreatePost() {
    yield takeEvery(
        createPostActionTypes.REQUEST,
        mutationMiddleware(createPostSaga),
    );
}
