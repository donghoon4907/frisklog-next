import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';

export interface UpdateSettingRequestPayload extends Payload {
    receivePostNotification?: boolean;
}

export interface UpdateSettingRequestAction
    extends PayloadAction<UpdateSettingRequestPayload> {}

export interface UpdateSettingSuccessAction extends Action<string> {}

export interface UpdateSettingFailureAction extends ErrorAction {}

export type UpdateSettingAction =
    | UpdateSettingRequestAction
    | UpdateSettingSuccessAction
    | UpdateSettingFailureAction;
