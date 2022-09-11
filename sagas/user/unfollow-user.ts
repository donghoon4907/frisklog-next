import { call, put, takeEvery } from 'redux-saga/effects';

import { UnfollowUserRequestAction } from '../../actions/user/unfollow-user.interface';
import { unfollowUser } from '../../services/usersService';
import {
    unfollowUserActionTypes,
    unfollowUserSuccess,
} from '../../actions/user/unfollow-user.action';

function* unfollowUserSaga(action: UnfollowUserRequestAction) {
    yield call(unfollowUser, action.payload);

    yield put(unfollowUserSuccess());
}

export function* watchUnfollowUser() {
    yield takeEvery(unfollowUserActionTypes.REQUEST, unfollowUserSaga);
}
