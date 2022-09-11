import { call, put, takeEvery } from 'redux-saga/effects';

import { FollowUserRequestAction } from '../../actions/user/follow-user.interface';
import { followUser } from '../../services/usersService';
import {
    followUserActionTypes,
    followUserSuccess,
} from '../../actions/user/follow-user.action';

function* followUserSaga(action: FollowUserRequestAction) {
    yield call(followUser, action.payload);

    yield put(followUserSuccess());
}

export function* watchFollowUser() {
    yield takeEvery(followUserActionTypes.REQUEST, followUserSaga);
}
