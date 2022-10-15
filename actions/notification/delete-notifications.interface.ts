import { ErrorAction, Payload, PayloadAction } from '..';
import { Notification } from '../../interfaces/notification';

export interface DeleteNotificationsRequestPayload extends Payload {
    notifications: string[];
}

export interface DeleteNotificationsRequestAction
    extends PayloadAction<DeleteNotificationsRequestPayload> {}

export type DeleteNotificationsSuccessPayload = Notification[];

export interface DeleteNotificationsSuccessAction
    extends PayloadAction<DeleteNotificationsSuccessPayload> {}

export interface DeleteNotificationsFailureAction extends ErrorAction {}

export type DeleteNotificationsAction =
    | DeleteNotificationsRequestAction
    | DeleteNotificationsSuccessAction
    | DeleteNotificationsFailureAction;
