import { call, put, takeLatest } from 'redux-saga/effects';

import * as categoriesService from '../../services/categoriesService';
import {
    relatedCategoriesActionTypes,
    relatedCategoriesSuccess,
} from '../../actions/category/related-categories.action';
import { RelatedCategoriesRequestAction } from '../../actions/category/related-categories.interface';

function* relatedCategoriesSaga(action: RelatedCategoriesRequestAction) {
    const { relatedCategories } = yield call(
        categoriesService.getRelatedCategories,
        action.payload,
    );

    yield put(relatedCategoriesSuccess(relatedCategories));
}

export function* watchRelatedCategories() {
    yield takeLatest(
        relatedCategoriesActionTypes.REQUEST,
        relatedCategoriesSaga,
    );
}
