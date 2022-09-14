import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';
import { Post } from '../../interfaces/post';
import { CreatePostRequestPayload } from './create-post.interface';

export interface UpdatePostRequestPayload extends CreatePostRequestPayload {
    id: string;
}

export interface UpdatePostSuccessPayload extends Pick<Post, "id" | "content" | "categories"> {}

export interface UpdatePostRequestAction
    extends PayloadAction<UpdatePostRequestPayload> {}

export interface UpdatePostSuccessAction
    extends PayloadAction<UpdatePostSuccessPayload> {}

export interface UpdatePostFailureAction extends ErrorAction {}

export type UpdatePostAction =
    | UpdatePostRequestAction
    | UpdatePostSuccessAction
    | UpdatePostFailureAction;
