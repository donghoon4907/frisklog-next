import { call, put, takeEvery } from 'redux-saga/effects';

import * as notificationsService from '../../services/notificationsService';
import { DeleteNotificationsRequestAction } from '../../actions/notification/delete-notifications.interface';
import {
    deleteNotificationsActionTypes,
    deleteNotificationsSuccess,
} from '../../actions/notification/delete-notifications.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* deleteNotificationsSaga(action: DeleteNotificationsRequestAction) {
    const { payload } = action;

    const { deleteNotifications } = yield call(
        notificationsService.deleteNotifications,
        payload,
    );

    yield put(deleteNotificationsSuccess(deleteNotifications));

    return null;
}

export function* watchDeleteNotifications() {
    yield takeEvery(
        deleteNotificationsActionTypes.REQUEST,
        mutationMiddleware(deleteNotificationsSaga),
    );
}
