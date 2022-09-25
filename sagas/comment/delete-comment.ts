import { call, put, takeEvery } from 'redux-saga/effects';

import { DeleteCommentRequestAction } from '../../actions/comment/delete-comment.interface';
import { deleteComment } from '../../services/commentsService';
import {
    deleteCommentActionTypes,
    deleteCommentSuccess,
} from '../../actions/comment/delete-comment.action';
import { safe } from '../../lib/error/safe';

function* deleteCommentSaga(action: DeleteCommentRequestAction) {
    yield call(deleteComment, action.payload);

    yield put(deleteCommentSuccess());
}

export function* watchDeleteComment() {
    yield takeEvery(deleteCommentActionTypes.REQUEST, safe(deleteCommentSaga));
}
