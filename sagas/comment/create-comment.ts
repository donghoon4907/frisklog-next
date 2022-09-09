import { call, put, takeEvery } from 'redux-saga/effects';

import { CreateCommentRequestAction } from '../../actions/comment/create-comment.interface';
import { createComment } from '../../services/commentsService';
import {
    createCommentActionTypes,
    createCommentFailure,
    createCommentSuccess,
} from '../../actions/comment/create-comment.action';

function* createCommentSaga(action: CreateCommentRequestAction) {
    try {
        yield call(createComment, action.payload);

        yield put(createCommentSuccess());
    } catch (e) {
        yield put(createCommentFailure((e as Error).message));
    }
}

export function* watchCreateComment() {
    yield takeEvery(createCommentActionTypes.REQUEST, createCommentSaga);
}
