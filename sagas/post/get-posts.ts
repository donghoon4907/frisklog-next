import { call, put, takeLatest } from 'redux-saga/effects';

import { GetPostsRequestAction } from '../../actions/post/get-posts.interface';
import { getPosts } from '../../services/postsService';
import {
    getPostsActionTypes,
    getPostsFailure,
    getPostsSuccess,
} from '../../actions/post/get-posts.action';

function* getPostsSaga(action: GetPostsRequestAction) {
    try {
        const { posts } = yield call(getPosts, action.payload);

        yield put(
            getPostsSuccess({
                nodes: posts.nodes,
                pageInfo: posts.pageInfo,
            }),
        );
    } catch (e) {
        yield put(getPostsFailure((e as Error).message));
    }
}

export function* watchGetPosts() {
    yield takeLatest(getPostsActionTypes.REQUEST, getPostsSaga);
}
