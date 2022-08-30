import { all, call } from 'redux-saga/effects';

import { userSaga } from './user';
import { postSaga } from './post';
import { commentSaga } from './comment';

export function* rootSaga() {
    yield all([call(userSaga), call(postSaga), call(commentSaga)]);
}
