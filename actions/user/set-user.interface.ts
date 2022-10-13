import { Action } from 'redux';

import { PayloadAction } from '..';
import { Notification } from '../../interfaces/notification';

export interface SetUserRequestPayload {
    id?: string;
    nickname?: string;
    avatar?: string;
    isMaster?: boolean;
    receiveNotifications?: Notification[];
}

export interface SetUserRequestAction
    extends PayloadAction<SetUserRequestPayload> {}

export interface SetUserCleanUpAction extends Action<string> {}

export type SetUserAction = SetUserRequestAction | SetUserCleanUpAction;
