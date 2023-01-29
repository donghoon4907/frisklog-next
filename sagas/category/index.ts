import { all, fork } from 'redux-saga/effects';

import { watchRecommendCategories } from './recommend-categories';
import { watchRelatedCategories } from './related-categories';
import { watchSearchCategories } from './search-categories';

export function* categorySaga() {
    yield all([
        fork(watchSearchCategories),
        fork(watchRecommendCategories),
        fork(watchRelatedCategories),
    ]);
}
