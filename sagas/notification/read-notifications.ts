import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
import { safe } from '../../lib/error/safe';
import { ReadNotificationsRequestAction } from '../../actions/notification/read-notifications.interface';
import {
    readNotificationsActionTypes,
    readNotificationsSuccess,
} from '../../actions/notification/read-notifications.action';

function* readNotificationsSaga(action: ReadNotificationsRequestAction) {
    const { payload } = action;

    const { readNotifications } = yield call(
        notificationsService.readNotifications,
        payload,
    );

    yield put(readNotificationsSuccess(readNotifications));

    payload.callbackFunc?.(null);
}

export function* watchReadNotifications() {
    yield takeEvery(
        readNotificationsActionTypes.REQUEST,
        safe(readNotificationsSaga),
    );
}
