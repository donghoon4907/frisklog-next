import { call, put, takeEvery } from 'redux-saga/effects';

import { FollowUserRequestAction } from '../../actions/user/follow-user.interface';
import * as usersService from '../../services/usersService';
import {
    followUserActionTypes,
    followUserSuccess,
} from '../../actions/user/follow-user.action';
import { safe } from '../../lib/error/safe';

function* followUserSaga(action: FollowUserRequestAction) {
    const { follow } = yield call(usersService.followUser, action.payload);

    yield put(followUserSuccess(follow));
}

export function* watchFollowUser() {
    yield takeEvery(followUserActionTypes.REQUEST, safe(followUserSaga));
}
