import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { User } from '../../interfaces/user';
import { GetUsersRequestPayload } from './get-users.interface';

export interface SearchUsersRequestPayload extends GetUsersRequestPayload {}

export interface SearchUsersSuccessPayload {
    nodes: User[];
    pageInfo: OffsetPageInfo;
}

export interface SearchUsersRequestAction
    extends PayloadAction<SearchUsersRequestPayload> {}

export interface SearchUsersSuccessAction
    extends PayloadAction<SearchUsersSuccessPayload> {}

export interface SearchUsersFailureAction extends ErrorAction {}

export type SearchUserssAction =
    | SearchUsersRequestAction
    | SearchUsersSuccessAction
    | SearchUsersFailureAction;
