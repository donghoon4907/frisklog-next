import { call, put, takeLatest } from 'redux-saga/effects';

import * as searchKeywordsService from '../../services/searchKeywordsService';
import type { SearchLogsRequestAction } from '../../actions/search-keyword/search-logs.interface';
import {
    searchLogsActionTypes,
    searchLogsSuccess,
} from '../../actions/search-keyword/search-logs.action';

function* searchLogsSaga(action: SearchLogsRequestAction) {
    const { payload } = action;

    const { searchLogs } = yield call(
        searchKeywordsService.getSearchLogs,
        payload,
    );

    yield put(searchLogsSuccess(searchLogs));
}

export function* watchSearchLogs() {
    yield takeLatest(searchLogsActionTypes.REQUEST, searchLogsSaga);
}
