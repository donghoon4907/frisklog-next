import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { CommentAction } from '../../actions/comment';
import {
    CreateCommentAction,
    CreateCommentPayload,
} from '../../actions/comment/create-comment';
import { MUTATION_CREATE_COMMENT } from '../../graphql/mutation/comment/create-comment';

function createCommentAPI(payload: CreateCommentPayload) {
    return client.request(MUTATION_CREATE_COMMENT, payload);
}

function* createCommentSaga(action: CommentAction) {
    try {
        yield call(createCommentAPI, action.payload);

        yield put({
            type: CreateCommentAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: CreateCommentAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchCreateComment() {
    yield takeEvery(CreateCommentAction.REQUEST, createCommentSaga);
}
