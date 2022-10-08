import { ErrorAction, PayloadAction } from '..';
import { RelatedCategory } from '../../interfaces/category';

export interface RelatedCategoriesRequestPayload {
    content: string;
}

export type RelatedCategoriesSuccessPayload = RelatedCategory[];

export interface RelatedCategoriesRequestAction
    extends PayloadAction<RelatedCategoriesRequestPayload> {}

export interface RelatedCategoriesSuccessAction
    extends PayloadAction<RelatedCategoriesSuccessPayload> {}

export interface RelatedCategoriesFailureAction extends ErrorAction {}

export type RelatedCategoriesAction =
    | RelatedCategoriesRequestAction
    | RelatedCategoriesSuccessAction
    | RelatedCategoriesFailureAction;
