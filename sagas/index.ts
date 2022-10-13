import { all, call } from 'redux-saga/effects';

import { userSaga } from './user';
import { postSaga } from './post';
import { commentSaga } from './comment';
import { commonSaga } from './common';
import { categorySaga } from './category';
import { notificationSaga } from './notification';

export function* rootSaga() {
    yield all([
        call(userSaga),
        call(postSaga),
        call(commentSaga),
        call(commonSaga),
        call(categorySaga),
        call(notificationSaga),
    ]);
}
