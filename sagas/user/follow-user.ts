import { call, put, takeEvery } from 'redux-saga/effects';

import { FollowUserRequestAction } from '../../actions/user/follow-user.interface';
import { followUser } from '../../services/usersService';
import {
    followUserActionTypes,
    followUserFailure,
    followUserSuccess,
} from '../../actions/user/follow-user.action';

function* followUserSaga(action: FollowUserRequestAction) {
    try {
        yield call(followUser, action.payload);

        yield put(followUserSuccess());
    } catch (e) {
        yield put(followUserFailure((e as Error).message));
    }
}

export function* watchFollowUser() {
    yield takeEvery(followUserActionTypes.REQUEST, followUserSaga);
}
