import { call, put, takeEvery } from 'redux-saga/effects';

import { FollowUserRequestAction } from '../../actions/user/follow-user.interface';
import * as usersService from '../../services/usersService';
import {
    followUserActionTypes,
    followUserSuccess,
} from '../../actions/user/follow-user.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* followUserSaga(action: FollowUserRequestAction) {
    const { follow } = yield call(usersService.followUser, action.payload);

    yield put(followUserSuccess(follow));

    return null;
}

export function* watchFollowUser() {
    yield takeEvery(followUserActionTypes.REQUEST, mutationMiddleware(followUserSaga));
}
