import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateCommentActionTypes,
    updateCommentSuccess,
} from '../../actions/comment/update-comment.action';
import { UpdateCommentRequestAction } from '../../actions/comment/update-comment.interface';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as commentsService from '../../services/commentsService';

function* updateCommentSaga(action: UpdateCommentRequestAction) {
    const { updateComment } = yield call(
        commentsService.updateComment,
        action.payload,
    );

    yield put(updateCommentSuccess(updateComment));

    return null;
}

export function* watchUpdateComment() {
    yield takeEvery(
        updateCommentActionTypes.REQUEST,
        mutationMiddleware(updateCommentSaga),
    );
}
