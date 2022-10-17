import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
import { safe } from '../../lib/error/safe';
import { GetNotificationsRequestAction } from '../../actions/notification/get-notifications.interface';
import {
    getNotificationsActionTypes,
    getNotificationsSuccess,
} from '../../actions/notification/get-notifications.action';

function* getNotificationsSaga(action: GetNotificationsRequestAction) {
    const { payload } = action;

    const { notifications } = yield call(
        notificationsService.getNotifications,
        payload,
    );

    yield put(getNotificationsSuccess(notifications));

    payload.callbackFunc?.(null);
}

export function* watchGetNotifications() {
    yield takeEvery(
        getNotificationsActionTypes.REQUEST,
        safe(getNotificationsSaga),
    );
}
