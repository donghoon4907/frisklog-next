import { Action } from 'redux';

import { ErrorAction, PayloadAction } from '..';
import { GetUserRequestPayload } from './get-user.interface';

export interface LoadUserRequestPayload extends GetUserRequestPayload {}

export interface LoadUserRequestAction
    extends PayloadAction<GetUserRequestPayload> {}

export interface LoadUserSuccessAction extends Action<string> {}

export interface LoadUserFailureAction extends ErrorAction {}

export type LoadUserAction =
    | LoadUserRequestPayload
    | LoadUserSuccessAction
    | LoadUserFailureAction;
