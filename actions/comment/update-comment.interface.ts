import { Action } from 'redux';

import { ErrorAction, Payload, PayloadAction } from '..';
import { CreateCommentRequestPayload } from './create-comment.interface';

export interface UpdateCommentRequestPayload
    extends CreateCommentRequestPayload,
        Payload {
    id: string;
}

export interface UpdateCommentRequestAction
    extends PayloadAction<UpdateCommentRequestPayload> {}

export interface UpdateCommentSuccessAction extends Action<string> {}

export interface UpdateCommentFailureAction extends ErrorAction {}

export type UpdateCommentAction =
    | UpdateCommentRequestAction
    | UpdateCommentSuccessAction
    | UpdateCommentFailureAction;
