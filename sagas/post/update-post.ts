import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updatePostActionTypes,
    updatePostSuccess,
} from '../../actions/post/update-post.action';
import { UpdatePostRequestAction } from '../../actions/post/update-post.interface';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as postsService from '../../services/postsService';

function* updatePostSaga(action: UpdatePostRequestAction) {
    const { payload } = action;

    const { updatePost } = yield call(postsService.updatePost, payload);

    yield put(updatePostSuccess(updatePost));

    alert('포스트가 정상적으로 수정되었습니다.');

    return null;
}

export function* watchUpdatePost() {
    yield takeEvery(
        updatePostActionTypes.REQUEST,
        mutationMiddleware(updatePostSaga),
    );
}
