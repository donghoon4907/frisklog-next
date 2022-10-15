import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
import { safe } from '../../lib/error/safe';
import { DeleteNotificationsRequestAction } from '../../actions/notification/delete-notifications.interface';
import {
    deleteNotificationsActionTypes,
    deleteNotificationsSuccess,
} from '../../actions/notification/delete-notifications.action';

function* deleteNotificationsSaga(action: DeleteNotificationsRequestAction) {
    const { payload } = action;

    const { deleteNotifications } = yield call(
        notificationsService.deleteNotifications,
        payload,
    );

    yield put(deleteNotificationsSuccess(deleteNotifications));

    payload.callbackFunc?.(null);
}

export function* watchDeleteNotifications() {
    yield takeEvery(
        deleteNotificationsActionTypes.REQUEST,
        safe(deleteNotificationsSaga),
    );
}
