import { Action } from 'redux';

import { PayloadAction } from '..';
import { Notification } from '../../interfaces/notification';

export interface SetNotificationRequestPayload {
    notification: Notification[];
}

export interface SetNotificationRequestAction
    extends PayloadAction<SetNotificationRequestPayload> {}

export interface NotificationCleanUpAction extends Action<string> {}

export type SetNotificationAction =
    | SetNotificationRequestAction
    | NotificationCleanUpAction;
