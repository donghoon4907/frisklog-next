import { Action } from 'redux';

import { PayloadAction } from '..';
import { PostVisibility } from '../../types/visibility';

export interface ActivePostRequestPayload {
    id: string;
    content: string;
    categories: string[];
    visibility: PostVisibility;
}

export interface ActivePostRequestAction
    extends PayloadAction<ActivePostRequestPayload> {}

export interface ActivePostCleanUpAction extends Action<string> {}

export type ActivePostAction =
    | ActivePostRequestAction
    | ActivePostCleanUpAction;
