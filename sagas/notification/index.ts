import { all, fork } from 'redux-saga/effects';

import { watchReadNotifications } from './read-notifications';

export function* notificationSaga() {
    yield all([fork(watchReadNotifications)]);
}
