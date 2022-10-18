import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import { HomePostsRequestAction } from '../../actions/post/home-posts.interface';
import {
    homePostsActionTypes,
    homePostsSuccess,
} from '../../actions/post/home-posts.action';

function* homePostsSaga(action: HomePostsRequestAction) {
    const { payload } = action;

    const { posts } = yield call(postsService.getPosts, payload);

    yield put(
        homePostsSuccess({
            nodes: posts.nodes,
            pageInfo: posts.pageInfo,
        }),
    );
}

export function* watchHomePosts() {
    yield takeLatest(homePostsActionTypes.REQUEST, homePostsSaga);
}
