import {
    ReadNotificationsRequestAction,
    ReadNotificationsRequestPayload,
    ReadNotificationsSuccessAction,
    ReadNotificationsSuccessPayload,
} from './read-notifications.interface';

export const READ_NOTIFICATIONS_KEY = 'READ_NOTIFICATIONS';

export const readNotificationsActionTypes = {
    REQUEST: `${READ_NOTIFICATIONS_KEY}_REQUEST`,
    SUCCESS: `${READ_NOTIFICATIONS_KEY}_SUCCESS`,
    FAILURE: `${READ_NOTIFICATIONS_KEY}_FAILURE`,
};

export function readNotificationsRequest(
    payload: ReadNotificationsRequestPayload,
): ReadNotificationsRequestAction {
    return {
        type: readNotificationsActionTypes.REQUEST,
        payload,
    };
}

export function readNotificationsSuccess(
    payload: ReadNotificationsSuccessPayload,
): ReadNotificationsSuccessAction {
    return {
        type: readNotificationsActionTypes.SUCCESS,
        payload,
    };
}
