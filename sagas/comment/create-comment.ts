import { call, put, takeEvery } from 'redux-saga/effects';

import { CreateCommentRequestAction } from '../../actions/comment/create-comment.interface';
import { createComment } from '../../services/commentsService';
import {
    createCommentActionTypes,
    createCommentSuccess,
} from '../../actions/comment/create-comment.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* createCommentSaga(action: CreateCommentRequestAction) {
    const { addComment } = yield call(createComment, action.payload);

    yield put(createCommentSuccess(addComment));

    alert('댓글이 등록되었습니다.');

    return null;
}

export function* watchCreateComment() {
    yield takeEvery(
        createCommentActionTypes.REQUEST,
        mutationMiddleware(createCommentSaga),
    );
}
