import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { LikedPostsRequestAction } from '../../actions/post/liked-posts.interface';
import {
    likedPostsActionTypes,
    likedPostsSuccess,
} from '../../actions/post/liked-posts.action';

function* likedPostsSaga(action: LikedPostsRequestAction) {
    const { payload } = action;

    const { likePosts } = yield call(postsService.getLikedPosts, payload);

    yield put(
        likedPostsSuccess({
            nodes: likePosts.nodes,
            pageInfo: likePosts.pageInfo,
        }),
    );
}

export function* watchLikedPosts() {
    yield takeLatest(likedPostsActionTypes.REQUEST, likedPostsSaga);
}
