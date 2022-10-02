import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { UserPostsRequestAction } from '../../actions/post/user-posts.interface';
import {
    userPostsActionTypes,
    userPostsSuccess,
} from '../../actions/post/user-posts.action';

function* userPostsSaga(action: UserPostsRequestAction) {
    const { posts } = yield call(postsService.getPosts, action.payload);

    yield put(
        userPostsSuccess({
            nodes: posts.nodes,
            pageInfo: posts.pageInfo,
        }),
    );
}

export function* watchUserPosts() {
    yield takeLatest(userPostsActionTypes.REQUEST, userPostsSaga);
}
