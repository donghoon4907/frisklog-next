import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { CommentAction } from '../../actions/comment';
import {
    DeleteCommentAction,
    DeleteCommentPayload,
} from '../../actions/comment/delete-comment';
import { MUTATION_DELETE_COMMENT } from '../../graphql/mutation/comment/delete-comment';

function deleteCommentAPI(payload: DeleteCommentPayload) {
    return client.request(MUTATION_DELETE_COMMENT, payload);
}

function* deleteCommentSaga(action: CommentAction) {
    try {
        yield call(deleteCommentAPI, action.payload);

        yield put({
            type: DeleteCommentAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: DeleteCommentAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchDeleteComment() {
    yield takeEvery(DeleteCommentAction.REQUEST, deleteCommentSaga);
}
