import { SwitchAction } from '..';

export interface NotificationFilterShowAction extends SwitchAction {}

export interface NotificationFilterHideAction extends SwitchAction {}

export type NotificationFilterAction =
    | NotificationFilterShowAction
    | NotificationFilterHideAction;
