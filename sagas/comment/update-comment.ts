import { call, put, takeEvery } from 'redux-saga/effects';
import {
    updateCommentActionTypes,
    updateCommentFailure,
    updateCommentSuccess,
} from '../../actions/comment/update-comment.action';
import { UpdateCommentRequestAction } from '../../actions/comment/update-comment.interface';
import { updateComment } from '../../services/commentsService';

function* updateCommentSaga(action: UpdateCommentRequestAction) {
    try {
        yield call(updateComment, action.payload);

        yield put(updateCommentSuccess());
    } catch (e) {
        yield put(updateCommentFailure((e as Error).message));
    }
}

export function* watchUpdateComment() {
    yield takeEvery(updateCommentActionTypes.REQUEST, updateCommentSaga);
}
