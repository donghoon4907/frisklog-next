import { ReadNotificationsAction } from './read-notifications.interface';
import {
    NotificationCleanUpAction,
    SetNotificationAction,
} from './set-notification.interface';

const NOTIFICATION_KEY = 'NOTIFICATION';

export const notificationActionTypes = {
    INIT: `INIT_${NOTIFICATION_KEY}`,
};

export function initNotification(): NotificationCleanUpAction {
    return {
        type: notificationActionTypes.INIT,
    };
}

export type NotificationAction =
    | ReadNotificationsAction
    | SetNotificationAction;
