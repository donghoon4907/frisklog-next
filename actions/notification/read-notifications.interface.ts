import { ErrorAction, Payload, PayloadAction } from '..';
import { Notification } from '../../interfaces/notification';

export interface ReadNotificationsRequestPayload extends Payload {
    notifications: string[];
}

export interface ReadNotificationsRequestAction
    extends PayloadAction<ReadNotificationsRequestPayload> {}

export type ReadNotificationsSuccessPayload = Notification[];

export interface ReadNotificationsSuccessAction
    extends PayloadAction<ReadNotificationsSuccessPayload> {}

export interface ReadNotificationsFailureAction extends ErrorAction {}

export type ReadNotificationsAction =
    | ReadNotificationsRequestAction
    | ReadNotificationsSuccessAction
    | ReadNotificationsFailureAction;
