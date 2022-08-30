import { call, put, takeEvery } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import {
    CreatePostAction,
    CreatePostPayload,
} from '../../actions/post/create-post';
import { MUTATION_CREATE_POST } from '../../graphql/mutation/post/create-post';

function createPostAPI(payload: CreatePostPayload) {
    return client.request(MUTATION_CREATE_POST, payload);
}

function* createPostSaga(action: PostAction) {
    try {
        yield call(createPostAPI, action.payload);

        yield put({
            type: CreatePostAction.SUCCESS,
        });
    } catch (e) {
        yield put({
            type: CreatePostAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchCreatePost() {
    yield takeEvery(CreatePostAction.REQUEST, createPostSaga);
}
