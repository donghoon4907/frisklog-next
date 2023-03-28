import { all, fork } from 'redux-saga/effects';

import { watchCreateUser } from './create-user';
import { watchFollowUser } from './follow-user';
import { watchGetFollowings } from './get-followings';
import { watchGetUser } from './get-user';
import { watchLoadUser } from './load-user';
import { watchLoginGithub } from './login-github';
import { watchLoginUser } from './login-user';
import { watchLogoutUser } from './logout-user';
import { watchRecommendUsers } from './recommend-users';
import { watchSearchUsers } from './search-users';
import { watchUnfollowUser } from './unfollow-user';
import { watchUpdateSetting } from './update-setting';
import { watchUpdateUser } from './update-user';
import { watchVerifyUser } from './verify-user';
import { watchLoginNaver } from './login-naver';

export function* userSaga() {
    yield all([
        fork(watchCreateUser),
        fork(watchUpdateUser),
        fork(watchFollowUser),
        fork(watchUnfollowUser),
        fork(watchLoginUser),
        fork(watchVerifyUser),
        fork(watchLoginGithub),
        fork(watchLoginNaver),
        fork(watchRecommendUsers),
        fork(watchGetUser),
        fork(watchLoadUser),
        fork(watchGetFollowings),
        fork(watchLogoutUser),
        fork(watchSearchUsers),
        fork(watchUpdateSetting),
    ]);
}
