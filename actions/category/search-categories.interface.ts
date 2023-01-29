import { ErrorAction, PayloadAction } from '..';
import { Category } from '../../interfaces/category';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { GetCategoriesRequestPayload } from './get-categories.interface';

export interface SearchCategoriesRequestPayload
    extends Pick<
        GetCategoriesRequestPayload,
        'offset' | 'limit' | 'searchKeyword'
    > {}

export interface SearchCategoriesSuccessPayload {
    nodes: Category[];
    pageInfo: OffsetPageInfo;
}

export interface SearchCategoriesRequestAction
    extends PayloadAction<SearchCategoriesRequestPayload> {}

export interface SearchCategoriesSuccessAction
    extends PayloadAction<SearchCategoriesSuccessPayload> {}

export interface SearchCategoriesFailureAction extends ErrorAction {}

export type SearchCategoriesAction =
    | SearchCategoriesRequestAction
    | SearchCategoriesSuccessAction
    | SearchCategoriesFailureAction;
