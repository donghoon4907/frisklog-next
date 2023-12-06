import { call, put, takeLatest } from 'redux-saga/effects';

import * as searchKeywordsService from '../../services/searchKeywordsService';
import { SearchKeywordsRequestAction } from '../../actions/search-keyword/search-keywords.interface';
import {
    searchKeywordsActionTypes,
    searchKeywordsSuccess,
} from '../../actions/search-keyword/search-keywords.action';

function* searchKeywordsSaga(action: SearchKeywordsRequestAction) {
    const { payload } = action;

    // const { searchKeywords } = yield call(
    //     searchKeywordsService.getSearchKeywords,
    //     payload,
    // );

    // yield put(searchKeywordsSuccess(searchKeywords));

    yield put(searchKeywordsSuccess([]));
}

export function* watchSearchKeywords() {
    yield takeLatest(searchKeywordsActionTypes.REQUEST, searchKeywordsSaga);
}
