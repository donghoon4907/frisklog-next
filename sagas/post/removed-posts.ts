import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import {
    removedPostsActionTypes,
    removedPostsSuccess,
} from '../../actions/post/removed-posts.action';
import { RemovedPostsRequestAction } from '../../actions/post/removed-posts.interface';

function* removedPostsSaga(action: RemovedPostsRequestAction) {
    const { payload } = action;

    const { removedPosts } = yield call(postsService.getRemovedPosts, payload);

    yield put(
        removedPostsSuccess({
            nodes: removedPosts.nodes,
            pageInfo: removedPosts.pageInfo,
        }),
    );
}

export function* watchRemovedPosts() {
    yield takeLatest(removedPostsActionTypes.REQUEST, removedPostsSaga);
}
