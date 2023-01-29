import { call, put, takeLatest } from 'redux-saga/effects';

import * as categoriesService from '../../services/categoriesService';
import { SearchCategoriesRequestAction } from '../../actions/category/search-categories.interface';
import {
    searchCategoriesActionTypes,
    searchCategoriesSuccess,
} from '../../actions/category/search-categories.action';

function* searchCategoriesSaga(action: SearchCategoriesRequestAction) {
    const { payload } = action;

    const { categories } = yield call(categoriesService.getCategories, payload);

    yield put(
        searchCategoriesSuccess({
            nodes: categories.nodes,
            pageInfo: categories.pageInfo,
        }),
    );
}

export function* watchSearchCategories() {
    yield takeLatest(searchCategoriesActionTypes.REQUEST, searchCategoriesSaga);
}
