import { call, put, takeLatest } from 'redux-saga/effects';

import {
    recommendUsersActionTypes,
    recommendUsersSuccess,
} from '../../actions/user/recommend-users.action';
import { RecommendUsersRequestAction } from '../../actions/user/recommend-users.interface';
import * as usersService from '../../services/usersService';

function* recommendUsersSaga(action: RecommendUsersRequestAction) {
    const { recommenders } = yield call(
        usersService.getRecommenders,
        action.payload,
    );

    yield put(
        recommendUsersSuccess({
            nodes: recommenders.nodes,
            pageInfo: recommenders.pageInfo,
        }),
    );
}

export function* watchRecommendUsers() {
    yield takeLatest(recommendUsersActionTypes.REQUEST, recommendUsersSaga);
}
