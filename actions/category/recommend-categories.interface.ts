import { ErrorAction, PayloadAction } from '..';
import { RecommendCategory } from '../../interfaces/category';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { GetCategoriesRequestPayload } from './get-categories.interface';

export interface RecommendCategoriesRequestPayload
    extends Pick<GetCategoriesRequestPayload, 'offset' | 'limit'> {}

export interface RecommendCategoriesSuccessPayload {
    nodes: RecommendCategory[];
    pageInfo: OffsetPageInfo;
}

export interface RecommendCategoriesRequestAction
    extends PayloadAction<RecommendCategoriesRequestPayload> {}

export interface RecommendCategoriesSuccessAction
    extends PayloadAction<RecommendCategoriesSuccessPayload> {}

export interface RecommendCategoriesFailureAction extends ErrorAction {}

export type RecommendCategoriesAction =
    | RecommendCategoriesRequestAction
    | RecommendCategoriesSuccessAction
    | RecommendCategoriesFailureAction;
