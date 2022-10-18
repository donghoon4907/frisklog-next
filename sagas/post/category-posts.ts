import { call, put, takeLatest } from 'redux-saga/effects';

import * as postsService from '../../services/postsService';
import {
    categoryPostsActionTypes,
    categoryPostsSuccess,
} from '../../actions/post/category-posts.action';
import { CategoryPostsRequestAction } from '../../actions/post/category-posts.interface';

function* categoryPostsSaga(action: CategoryPostsRequestAction) {
    const { payload } = action;

    const { categoryPosts } = yield call(
        postsService.getCategoryPosts,
        payload,
    );

    yield put(
        categoryPostsSuccess({
            nodes: categoryPosts.nodes,
            pageInfo: categoryPosts.pageInfo,
        }),
    );
}

export function* watchCategoryPosts() {
    yield takeLatest(categoryPostsActionTypes.REQUEST, categoryPostsSaga);
}
