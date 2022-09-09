import { call, put, takeEvery } from 'redux-saga/effects';

import { DeleteCommentRequestAction } from '../../actions/comment/delete-comment.interface';
import { deleteComment } from '../../services/commentsService';
import {
    deleteCommentActionTypes,
    deleteCommentFailure,
    deleteCommentSuccess,
} from '../../actions/comment/delete-comment.action';

function* deleteCommentSaga(action: DeleteCommentRequestAction) {
    try {
        yield call(deleteComment, action.payload);

        yield put(deleteCommentSuccess());
    } catch (e) {
        yield put(deleteCommentFailure((e as Error).message));
    }
}

export function* watchDeleteComment() {
    yield takeEvery(deleteCommentActionTypes.REQUEST, deleteCommentSaga);
}
