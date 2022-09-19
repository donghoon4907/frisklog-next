import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { UserPostsRequestAction } from '../../actions/post/user-posts.interface';
import {
    userPostsActionTypes,
    userPostsSuccess,
} from '../../actions/post/user-posts.action';

function* userPostsSaga(action: UserPostsRequestAction) {
    const { posts } = yield call(postsService.getPosts, action.payload);

    const { userId } = action.payload;

    if (userId) {
        yield put(
            userPostsSuccess({
                userId,
                nodes: posts.nodes,
                pageInfo: posts.pageInfo,
            }),
        );
    } else {
        throw new Error('[Saga] userId is not defined in userPostsSaga');
    }
}

export function* watchUserPosts() {
    yield takeLatest(userPostsActionTypes.REQUEST, userPostsSaga);
}
