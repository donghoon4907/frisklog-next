import { call, put, takeEvery } from 'redux-saga/effects';

import { UnfollowUserRequestAction } from '../../actions/user/unfollow-user.interface';
import { unfollowUser } from '../../services/usersService';
import {
    unfollowUserActionTypes,
    unfollowUserFailure,
    unfollowUserSuccess,
} from '../../actions/user/unfollow-user.action';

function* unfollowUserSaga(action: UnfollowUserRequestAction) {
    try {
        yield call(unfollowUser, action.payload);

        yield put(unfollowUserSuccess());
    } catch (e) {
        yield put(unfollowUserFailure((e as Error).message));
    }
}

export function* watchUnfollowUser() {
    yield takeEvery(unfollowUserActionTypes.REQUEST, unfollowUserSaga);
}
