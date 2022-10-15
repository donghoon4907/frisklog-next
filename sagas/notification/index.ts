import { all, fork } from 'redux-saga/effects';

import { watchReadNotifications } from './read-notifications';
import { watchGetNotifications } from './get-notifications';
import { watchDeleteNotifications } from './delete-notifications';

export function* notificationSaga() {
    yield all([
        fork(watchReadNotifications),
        fork(watchGetNotifications),
        fork(watchDeleteNotifications),
    ]);
}
