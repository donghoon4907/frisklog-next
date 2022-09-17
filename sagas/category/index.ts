import { all, fork } from 'redux-saga/effects';
import { watchRecommendCategories } from './recommend-categories';

export function* categorySaga() {
    yield all([fork(watchRecommendCategories)]);
}
