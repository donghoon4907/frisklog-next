import { call, put, takeLatest } from 'redux-saga/effects';

import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';
import {
    getFollowingsActionTypes,
    getFollowingsSuccess,
} from '../../actions/user/get-followings.action';
import { GetFollowingsRequestAction } from '../../actions/user/get-followings.interface';

function* getFollowingsSaga(action: GetFollowingsRequestAction) {
    const { followings } = yield call(
        usersService.getFollowings,
        action.payload,
    );

    yield put(getFollowingsSuccess(followings));
}

export function* watchGetFollowings() {
    yield takeLatest(getFollowingsActionTypes.REQUEST, safe(getFollowingsSaga));
}
