import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
import { ReadNotificationsRequestAction } from '../../actions/notification/read-notifications.interface';
import {
    readNotificationsActionTypes,
    readNotificationsSuccess,
} from '../../actions/notification/read-notifications.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* readNotificationsSaga(action: ReadNotificationsRequestAction) {
    const { payload } = action;

    const { readNotifications } = yield call(
        notificationsService.readNotifications,
        payload,
    );

    yield put(readNotificationsSuccess(readNotifications));

    return null;
}

export function* watchReadNotifications() {
    yield takeEvery(
        readNotificationsActionTypes.REQUEST,
        mutationMiddleware(readNotificationsSaga),
    );
}
