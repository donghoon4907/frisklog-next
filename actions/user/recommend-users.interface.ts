import { ErrorAction, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { RecommendUser } from '../../interfaces/user';
import { GetUsersRequestPayload } from './get-users.interface';

export interface RecommendUsersRequestPayload
    extends Pick<GetUsersRequestPayload, 'offset' | 'limit'> {}

export interface RecommendUsersSuccessPayload {
    nodes: RecommendUser[];
    pageInfo: OffsetPageInfo;
}

export interface RecommendUsersRequestAction
    extends PayloadAction<RecommendUsersRequestPayload> {}

export interface RecommendUsersSuccessAction
    extends PayloadAction<RecommendUsersSuccessPayload> {}

export interface RecommendUsersFailureAction extends ErrorAction {}

export type RecommendUsersAction =
    | RecommendUsersRequestAction
    | RecommendUsersSuccessAction
    | RecommendUsersFailureAction;
