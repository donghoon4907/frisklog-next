import { all, fork } from 'redux-saga/effects';

import { watchSearchKeywords } from './search-keywords';

export function* searchKeywordSaga() {
    yield all([fork(watchSearchKeywords)]);
}
