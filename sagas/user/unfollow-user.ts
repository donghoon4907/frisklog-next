import { call, put, takeEvery } from 'redux-saga/effects';

import { UnfollowUserRequestAction } from '../../actions/user/unfollow-user.interface';
import * as usersService from '../../services/usersService';
import {
    unfollowUserActionTypes,
    unfollowUserSuccess,
} from '../../actions/user/unfollow-user.action';
import { safe } from '../../lib/error/safe';

function* unfollowUserSaga(action: UnfollowUserRequestAction) {
    const { unfollow } = yield call(usersService.unfollowUser, action.payload);

    yield put(unfollowUserSuccess(unfollow));
}

export function* watchUnfollowUser() {
    yield takeEvery(unfollowUserActionTypes.REQUEST, safe(unfollowUserSaga));
}
