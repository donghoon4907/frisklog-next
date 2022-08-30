import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { CommentAction } from '../../actions/comment';
import {
    UpdateCommentAction,
    UpdateCommentPayload,
} from '../../actions/comment/update-comment';
import { MUTATION_UPDATE_COMMENT } from '../../graphql/mutation/comment/update-comment';

function updateCommentAPI(payload: UpdateCommentPayload) {
    return client.request(MUTATION_UPDATE_COMMENT, payload);
}

function* updateCommentSaga(action: CommentAction) {
    try {
        yield call(updateCommentAPI, action.payload);

        yield put({
            type: UpdateCommentAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: UpdateCommentAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchUpdateComment() {
    yield takeEvery(UpdateCommentAction.REQUEST, updateCommentSaga);
}
