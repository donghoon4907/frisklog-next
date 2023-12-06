import { call, put, takeLatest } from 'redux-saga/effects';

import * as searchKeywordsService from '../../services/searchKeywordsService';
import type { SearchLogsRequestAction } from '../../actions/search-keyword/search-logs.interface';
import {
    searchLogsActionTypes,
    searchLogsSuccess,
} from '../../actions/search-keyword/search-logs.action';

function* searchLogsSaga(action: SearchLogsRequestAction) {
    const { payload } = action;

    // const { searchLogs } = yield call(
    //     searchKeywordsService.getSearchLogs,
    //     payload,
    // );

    // yield put(searchLogsSuccess(searchLogs));

    yield put(
        searchLogsSuccess({
            nodes: [],
            pageInfo: {
                pageSize: 0,
                lastPage: 0,
                nodeCount: 0,
                totalCount: 0,
                currentPage: 0,
            },
        }),
    );
}

export function* watchSearchLogs() {
    yield takeLatest(searchLogsActionTypes.REQUEST, searchLogsSaga);
}
