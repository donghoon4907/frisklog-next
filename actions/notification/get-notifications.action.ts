import {
    GetNotificationsCleanUpAction,
    GetNotificationsRequestAction,
    GetNotificationsRequestPayload,
    GetNotificationsSuccessAction,
    GetNotificationsSuccessPayload,
} from './get-notifications.interface';

export const GET_NOTIFICATIONS_KEY = 'GET_NOTIFICATIONS';

export const getNotificationsActionTypes = {
    REQUEST: `${GET_NOTIFICATIONS_KEY}_REQUEST`,
    SUCCESS: `${GET_NOTIFICATIONS_KEY}_SUCCESS`,
    FAILURE: `${GET_NOTIFICATIONS_KEY}_FAILURE`,
    CLEANUP: `${GET_NOTIFICATIONS_KEY}_CLEANUP`,
};

export function getNotificationsRequest(
    payload: GetNotificationsRequestPayload,
): GetNotificationsRequestAction {
    return {
        type: getNotificationsActionTypes.REQUEST,
        payload,
    };
}

export function getNotificationsSuccess(
    payload: GetNotificationsSuccessPayload,
): GetNotificationsSuccessAction {
    return {
        type: getNotificationsActionTypes.SUCCESS,
        payload,
    };
}

export function getNotificationsCleanUp(): GetNotificationsCleanUpAction {
    return {
        type: getNotificationsActionTypes.CLEANUP,
    };
}
