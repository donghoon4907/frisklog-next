import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { SearchPostsRequestAction } from '../../actions/post/search-posts.interface';
import {
    searchPostsActionTypes,
    searchPostsSuccess,
} from '../../actions/post/search-posts.action';

function* searchPostsSaga(action: SearchPostsRequestAction) {
    const { payload } = action;

    const { posts } = yield call(postsService.getPosts, payload);

    yield put(
        searchPostsSuccess({
            nodes: posts.nodes,
            pageInfo: posts.pageInfo,
        }),
    );
}

export function* watchSearchPosts() {
    yield takeLatest(searchPostsActionTypes.REQUEST, searchPostsSaga);
}
