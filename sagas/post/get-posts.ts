import { call, put, takeLatest } from 'redux-saga/effects';

import { client } from '../../graphql/client';
import { PostAction } from '../../actions/post';
import {
    GetPostsAction,
    GetPostsArgsPayload,
} from '../../actions/post/get-posts';
import { GET_POSTS } from '../../graphql/query/post/posts';

function getPostsAPI(payload: GetPostsArgsPayload) {
    return client.request(GET_POSTS, payload);
}

function* getPostsSaga(action: PostAction) {
    try {
        const { posts } = yield call(getPostsAPI, action.payload);

        yield put({
            type: GetPostsAction.SUCCESS,
            payload: {
                nodes: posts.nodes,
                pageInfo: posts.pageInfo,
            },
        });
    } catch (e) {
        yield put({
            type: GetPostsAction.FAILURE,
            error: (e as Error).message,
        });
    }
}

export function* watchGetPosts() {
    yield takeLatest(GetPostsAction.REQUEST, getPostsSaga);
}
