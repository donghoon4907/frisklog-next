import { all, fork } from 'redux-saga/effects';

import { watchRecommendCategories } from './recommend-categories';
import { watchRelatedCategories } from './related-categories';

export function* categorySaga() {
    yield all([fork(watchRecommendCategories), fork(watchRelatedCategories)]);
}
