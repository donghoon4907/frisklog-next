import { call, put, takeLatest } from 'redux-saga/effects';

import * as categoriesService from '../../services/categoriesService';
import {
    recommendCategoriesActionTypes,
    recommendCategoriesSuccess,
} from '../../actions/category/recommend-categories.action';
import { RecommendCategoriesRequestAction } from '../../actions/category/recommend-categories.interface';

function* recommendCategoriesSaga(action: RecommendCategoriesRequestAction) {
    const { recommendCategories } = yield call(
        categoriesService.getRecommendCategories,
        action.payload,
    );

    yield put(
        recommendCategoriesSuccess({
            nodes: recommendCategories.nodes,
            pageInfo: recommendCategories.pageInfo,
        }),
    );
}

export function* watchRecommendCategories() {
    yield takeLatest(
        recommendCategoriesActionTypes.REQUEST,
        recommendCategoriesSaga,
    );
}
