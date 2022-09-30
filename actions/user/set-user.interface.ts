import { Action } from 'redux';

import { PayloadAction } from '..';
import { User } from '../../interfaces/user';

export interface SetUserRequestPayload {
    id?: string;
    nickname?: string;
    avatar?: string;
    isMaster?: boolean;
    followings?: User[];
}

export interface SetUserRequestAction
    extends PayloadAction<SetUserRequestPayload> {}

export interface SetUserCleanUpAction extends Action<string> {}

export type SetUserAction = SetUserRequestAction | SetUserCleanUpAction;
