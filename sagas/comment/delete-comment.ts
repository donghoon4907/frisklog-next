import { call, put, takeEvery } from 'redux-saga/effects';

import { DeleteCommentRequestAction } from '../../actions/comment/delete-comment.interface';
import * as commentsService from '../../services/commentsService';
import {
    deleteCommentActionTypes,
    deleteCommentSuccess,
} from '../../actions/comment/delete-comment.action';
import { safe } from '../../lib/error/safe';

function* deleteCommentSaga(action: DeleteCommentRequestAction) {
    const { deleteComment } = yield call(
        commentsService.deleteComment,
        action.payload,
    );

    yield put(deleteCommentSuccess(deleteComment));

    action.payload.callbackFunc?.(null);
}

export function* watchDeleteComment() {
    yield takeEvery(deleteCommentActionTypes.REQUEST, safe(deleteCommentSaga));
}
