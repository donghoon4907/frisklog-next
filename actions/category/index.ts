import { RecommendCategoriesAction } from './recommend-categories.interface';
import { RelatedCategoriesAction } from './related-categories.interface';

export type CategoryAction =
    | RecommendCategoriesAction
    | RelatedCategoriesAction;
