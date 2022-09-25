import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateCommentActionTypes,
    updateCommentSuccess,
} from '../../actions/comment/update-comment.action';
import { UpdateCommentRequestAction } from '../../actions/comment/update-comment.interface';
import { safe } from '../../lib/error/safe';
import { updateComment } from '../../services/commentsService';

function* updateCommentSaga(action: UpdateCommentRequestAction) {
    yield call(updateComment, action.payload);

    yield put(updateCommentSuccess());
}

export function* watchUpdateComment() {
    yield takeEvery(updateCommentActionTypes.REQUEST, safe(updateCommentSaga));
}
