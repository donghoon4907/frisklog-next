import { call, put, takeEvery } from 'redux-saga/effects';

import { CreateCommentRequestAction } from '../../actions/comment/create-comment.interface';
import { createComment } from '../../services/commentsService';
import {
    createCommentActionTypes,
    createCommentSuccess,
} from '../../actions/comment/create-comment.action';

function* createCommentSaga(action: CreateCommentRequestAction) {
    yield call(createComment, action.payload);

    yield put(createCommentSuccess());
}

export function* watchCreateComment() {
    yield takeEvery(createCommentActionTypes.REQUEST, createCommentSaga);
}
