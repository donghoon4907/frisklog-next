import { Action } from 'redux';

import { PayloadAction } from '..';

export interface ActivePostRequestPayload {
    id: string;
    content: string;
    categories: string[];
}

export interface ActivePostRequestAction
    extends PayloadAction<ActivePostRequestPayload> {}

export interface ActivePostCleanUpAction extends Action<string> {}

export type ActivePostAction =
    | ActivePostRequestAction
    | ActivePostCleanUpAction;
