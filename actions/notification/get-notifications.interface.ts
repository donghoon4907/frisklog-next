import { ErrorAction, PayloadAction } from '..';
import { Notification } from '../../interfaces/notification';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { OffsetLimitRequestPayload } from '../../interfaces/request';

export interface GetNotificationsRequestPayload
    extends OffsetLimitRequestPayload {}

export interface GetNotificationsSuccessPayload {
    nodes: Notification[];
    pageInfo: OffsetPageInfo;
}

export interface GetNotificationsRequestAction
    extends PayloadAction<GetNotificationsRequestPayload> {}

export interface GetNotificationsSuccessAction
    extends PayloadAction<GetNotificationsSuccessPayload> {}

export interface GetNotificationsFailureAction extends ErrorAction {}

export type GetNotificationssAction =
    | GetNotificationsRequestAction
    | GetNotificationsSuccessAction
    | GetNotificationsFailureAction;
