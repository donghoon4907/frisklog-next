import { all, fork } from 'redux-saga/effects';

import { watchSearchKeywords } from './search-keywords';
import { watchSearchLogs } from './search-logs';

export function* searchKeywordSaga() {
    yield all([fork(watchSearchKeywords), fork(watchSearchLogs)]);
}
