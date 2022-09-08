import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';
import { CreatePostRequestPayload } from './create-post.interface';

export interface UpdatePostRequestPayload extends CreatePostRequestPayload {
    id: string;
}

export interface UpdatePostRequestAction
    extends PayloadAction<UpdatePostRequestPayload> {}

export interface UpdatePostSuccessAction extends Action<string> {}

export interface UpdatePostFailureAction extends ErrorAction {}

export type UpdatePostAction =
    | UpdatePostRequestAction
    | UpdatePostSuccessAction
    | UpdatePostFailureAction;
