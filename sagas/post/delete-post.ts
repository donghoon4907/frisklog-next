import { call, put, takeEvery } from 'redux-saga/effects';

import { DeletePostRequestAction } from '../../actions/post/delete-post.interface';
import * as postsService from '../../services/postsService';
import {
    deletePostActionTypes,
    deletePostSuccess,
} from '../../actions/post/delete-post.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* deletePostSaga(action: DeletePostRequestAction) {
    const { payload } = action;

    const { deletePost } = yield call(postsService.deletePost, payload);

    yield put(deletePostSuccess(deletePost));

    alert('포스트가 정상적으로 삭제되었습니다.');

    return null;
}

export function* watchDeletePost() {
    yield takeEvery(
        deletePostActionTypes.REQUEST,
        mutationMiddleware(deletePostSaga),
    );
}
