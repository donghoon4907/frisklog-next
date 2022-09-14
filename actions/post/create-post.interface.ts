import { ErrorAction, PayloadAction } from '..';
import { Post } from '../../interfaces/post';

export interface CreatePostRequestPayload {
    content: string;
    categories: string[];
}

export interface CreatePostSuccessPayload extends Post {}

export interface CreatePostRequestAction
    extends PayloadAction<CreatePostRequestPayload> {}

export interface CreatePostSuccessAction
    extends PayloadAction<CreatePostSuccessPayload> {}

export interface CreatePostFailureAction extends ErrorAction {}

export type CreatePostAction =
    | CreatePostRequestAction
    | CreatePostSuccessAction
    | CreatePostFailureAction;
