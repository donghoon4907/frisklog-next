import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { User } from '../../interfaces/user';
import { GetUsersRequestPayload } from './get-users.interface';

export interface GetFollowingsRequestPayload
    extends Pick<GetUsersRequestPayload, 'offset' | 'limit' | 'nickname'> {}

export interface GetFollowingsSuccessPayload {
    nodes: User[];
    pageInfo: OffsetPageInfo;
}

export interface GetFollowingsRequestAction
    extends PayloadAction<GetFollowingsRequestPayload> {}

export interface GetFollowingsSuccessAction
    extends PayloadAction<GetFollowingsSuccessPayload> {}

export interface GetFollowingsFailureAction extends ErrorAction {}

export type GetFollowingssAction =
    | GetFollowingsRequestAction
    | GetFollowingsSuccessAction
    | GetFollowingsFailureAction;
