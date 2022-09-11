import { call, put, takeLatest } from 'redux-saga/effects';

import { GetPostsRequestAction } from '../../actions/post/get-posts.interface';
import { getPosts } from '../../services/postsService';
import {
    getPostsActionTypes,
    getPostsSuccess,
} from '../../actions/post/get-posts.action';

function* getPostsSaga(action: GetPostsRequestAction) {
    const { posts } = yield call(getPosts, action.payload);

    yield put(
        getPostsSuccess({
            nodes: posts.nodes,
            pageInfo: posts.pageInfo,
        }),
    );
}

export function* watchGetPosts() {
    yield takeLatest(getPostsActionTypes.REQUEST, getPostsSaga);
}
