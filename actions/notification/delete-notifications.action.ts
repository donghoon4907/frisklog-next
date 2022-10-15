import {
    DeleteNotificationsRequestAction,
    DeleteNotificationsRequestPayload,
    DeleteNotificationsSuccessAction,
    DeleteNotificationsSuccessPayload,
} from './delete-notifications.interface';

export const DELETE_NOTIFICATIONS_KEY = 'DELETE_NOTIFICATIONS';

export const deleteNotificationsActionTypes = {
    REQUEST: `${DELETE_NOTIFICATIONS_KEY}_REQUEST`,
    SUCCESS: `${DELETE_NOTIFICATIONS_KEY}_SUCCESS`,
    FAILURE: `${DELETE_NOTIFICATIONS_KEY}_FAILURE`,
};

export function deleteNotificationsRequest(
    payload: DeleteNotificationsRequestPayload,
): DeleteNotificationsRequestAction {
    return {
        type: deleteNotificationsActionTypes.REQUEST,
        payload,
    };
}

export function deleteNotificationsSuccess(
    payload: DeleteNotificationsSuccessPayload,
): DeleteNotificationsSuccessAction {
    return {
        type: deleteNotificationsActionTypes.SUCCESS,
        payload,
    };
}
