import {
    NotificationFilterHideAction,
    NotificationFilterShowAction,
} from './notification-filter.interface';

const REQUEST_NAME = 'NOTIFICATION_FILTER';

export const notificationFilterActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showNotificationFilter(): NotificationFilterShowAction {
    return {
        type: notificationFilterActionTypes.SHOW,
    };
}

export function hideNotificationFilter(): NotificationFilterHideAction {
    return {
        type: notificationFilterActionTypes.HIDE,
    };
}
