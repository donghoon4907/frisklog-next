import { all, fork } from 'redux-saga/effects';

import { watchCreatePost } from './create-post';
import { watchDeletePost } from './delete-post';
import { watchLikePost } from './like-post';
import { watchUnlikePost } from './unlike-post';
import { watchUpdatePost } from './update-post';

export function* postSaga() {
    yield all([
        fork(watchCreatePost),
        fork(watchUpdatePost),
        fork(watchDeletePost),
        fork(watchLikePost),
        fork(watchUnlikePost),
    ]);
}
