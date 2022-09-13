import { call, put, takeEvery } from 'redux-saga/effects';

import { DeletePostRequestAction } from '../../actions/post/delete-post.interface';
import { deletePost } from '../../services/postsService';
import {
    deletePostActionTypes,
    deletePostSuccess,
} from '../../actions/post/delete-post.action';

function* deletePostSaga(action: DeletePostRequestAction) {
    yield call(deletePost, action.payload);

    yield put(deletePostSuccess());

    alert('포스트가 정상적으로 삭제되었습니다.');

    window.location.reload();
}

export function* watchDeletePost() {
    yield takeEvery(deletePostActionTypes.REQUEST, deletePostSaga);
}
