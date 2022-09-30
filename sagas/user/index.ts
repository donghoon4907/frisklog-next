import { all, fork } from 'redux-saga/effects';

import { watchCreateUser } from './create-user';
import { watchFollowUser } from './follow-user';
import { watchGetUser } from './get-user';
import { watchLoadUser } from './load-user';
import { watchLoginGithub } from './login-github';
import { watchLoginUser } from './login-user';
import { watchRecommendUsers } from './recommend-users';
import { watchUnfollowUser } from './unfollow-user';
import { watchUpdateUser } from './update-user';
import { watchVerifyUser } from './verify-user';

export function* userSaga() {
    yield all([
        fork(watchCreateUser),
        fork(watchUpdateUser),
        fork(watchFollowUser),
        fork(watchUnfollowUser),
        fork(watchLoginUser),
        fork(watchVerifyUser),
        fork(watchLoginGithub),
        fork(watchRecommendUsers),
        fork(watchGetUser),
        fork(watchLoadUser),
    ]);
}
