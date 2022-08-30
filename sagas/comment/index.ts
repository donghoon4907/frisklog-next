import { all, fork } from 'redux-saga/effects';

import { watchCreateComment } from './create-comment';
import { watchDeleteComment } from './delete-comment';
import { watchUpdateComment } from './update-comment';

export function* commentSaga() {
    yield all([
        fork(watchCreateComment),
        fork(watchUpdateComment),
        fork(watchDeleteComment),
    ]);
}
