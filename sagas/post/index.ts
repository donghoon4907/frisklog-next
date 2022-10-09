import { all, fork } from 'redux-saga/effects';

import { watchCreatePost } from './create-post';
import { watchDeletePost } from './delete-post';
import { watchFollowingPosts } from './following-posts';
import { watchHomePosts } from './home-posts';
import { watchLikePost } from './like-post';
import { watchSearchPosts } from './search-posts';
import { watchUnlikePost } from './unlike-post';
import { watchUpdatePost } from './update-post';
import { watchUserPosts } from './user-posts';
import { watchCategoryPosts } from './category-posts';

export function* postSaga() {
    yield all([
        fork(watchCreatePost),
        fork(watchUpdatePost),
        fork(watchDeletePost),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchHomePosts),
        fork(watchUserPosts),
        fork(watchFollowingPosts),
        fork(watchSearchPosts),
        fork(watchCategoryPosts),
    ]);
}
