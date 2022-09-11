import { Action } from 'redux';

import {
    // ErrorAction,
    PayloadAction,
} from '..';

export interface CreatePostRequestPayload {
    content: string;
    categories: string[];
}

export interface CreatePostRequestAction
    extends PayloadAction<CreatePostRequestPayload> {}

export interface CreatePostSuccessAction extends Action<string> {}

// export interface CreatePostFailureAction extends ErrorAction {}

export type CreatePostAction =
    | CreatePostRequestAction
    | CreatePostSuccessAction;
// | CreatePostFailureAction;
