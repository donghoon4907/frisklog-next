import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import {
    followingPostsActionTypes,
    followingPostsSuccess,
} from '../../actions/post/following-posts.action';
import { FollowingPostsRequestAction } from '../../actions/post/following-posts.interface';

function* followingPostsSaga(action: FollowingPostsRequestAction) {
    const { followingPosts } = yield call(
        postsService.getFollowingPosts,
        action.payload,
    );

    yield put(
        followingPostsSuccess({
            nodes: followingPosts.nodes,
            pageInfo: followingPosts.pageInfo,
        }),
    );
}

export function* watchFollowingPosts() {
    yield takeLatest(followingPostsActionTypes.REQUEST, followingPostsSaga);
}
