import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
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
}

export function* watchGetNotifications() {
    yield takeEvery(getNotificationsActionTypes.REQUEST, getNotificationsSaga);
}
