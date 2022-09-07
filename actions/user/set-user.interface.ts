import { Action } from 'redux';

import { PayloadAction } from '..';

export interface SetUserRequestPayload {
    id: string;
    nickname: string;
    avatar: string;
    isMaster: boolean;
}

export interface SetUserRequestAction
    extends PayloadAction<SetUserRequestPayload> {}

export interface SetUserCleanUpAction extends Action<string> {}

export type SetUserAction = SetUserRequestAction | SetUserCleanUpAction;
