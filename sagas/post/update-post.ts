import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updatePostActionTypes,
    updatePostSuccess,
} from '../../actions/post/update-post.action';
import { UpdatePostRequestAction } from '../../actions/post/update-post.interface';
import { hidePostModal } from '../../actions/switch/post-modal.action';
import * as postsService from '../../services/postsService';

function* updatePostSaga(action: UpdatePostRequestAction) {
    const { updatePost } = yield call(postsService.updatePost, action.payload);

    yield put(updatePostSuccess(updatePost));

    alert('포스트가 정상적으로 수정되었습니다.');

    yield put(hidePostModal());
}

export function* watchUpdatePost() {
    yield takeEvery(updatePostActionTypes.REQUEST, updatePostSaga);
}
