import { call, put, takeEvery } from 'redux-saga/effects';

import {
    restorePostActionTypes,
    restorePostSuccess,
} from '../../actions/post/restore-post.action';
import { RestorePostRequestAction } from '../../actions/post/restore-post.interface';
import * as postsService from '../../services/postsService';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* restorePostSaga(action: RestorePostRequestAction) {
    const { payload } = action;

    const { restorePost } = yield call(postsService.restorePost, payload);

    yield put(restorePostSuccess(restorePost));

    alert('포스트가 정상적으로 복원되었습니다.');

    return null;
}

export function* watchRestorePost() {
    yield takeEvery(
        restorePostActionTypes.REQUEST,
        mutationMiddleware(restorePostSaga),
    );
}
