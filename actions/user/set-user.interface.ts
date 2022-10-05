import { Action } from 'redux';

import { PayloadAction } from '..';
import { Follow } from '../../interfaces/follow';

export interface SetUserRequestPayload {
    id?: string;
    nickname?: string;
    avatar?: string;
    isMaster?: boolean;
    followings?: Follow[];
}

export interface SetUserRequestAction
    extends PayloadAction<SetUserRequestPayload> {}

export interface SetUserCleanUpAction extends Action<string> {}

export type SetUserAction = SetUserRequestAction | SetUserCleanUpAction;
