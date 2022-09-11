import { call, put, takeEvery } from 'redux-saga/effects';

import { DeleteCommentRequestAction } from '../../actions/comment/delete-comment.interface';
import { deleteComment } from '../../services/commentsService';
import {
    deleteCommentActionTypes,
    deleteCommentSuccess,
} from '../../actions/comment/delete-comment.action';

function* deleteCommentSaga(action: DeleteCommentRequestAction) {
    yield call(deleteComment, action.payload);

    yield put(deleteCommentSuccess());
}

export function* watchDeleteComment() {
    yield takeEvery(deleteCommentActionTypes.REQUEST, deleteCommentSaga);
}
