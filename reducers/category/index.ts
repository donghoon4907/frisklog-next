import produce from 'immer';

import { RecommendCategory, RelatedCategory } from '../../interfaces/category';
import { CategoryAction } from '../../actions/category';
import { recommendCategoriesActionTypes } from '../../actions/category/recommend-categories.action';
import { RecommendCategoriesSuccessAction } from '../../actions/category/recommend-categories.interface';
import { relatedCategoriesActionTypes } from '../../actions/category/related-categories.action';
import { RelatedCategoriesSuccessAction } from '../../actions/category/related-categories.interface';

export interface CategoryState {
    recommendCategories: RecommendCategory[];
    relatedCategories: RelatedCategory[];
}

const initialState: CategoryState = {
    recommendCategories: [],
    relatedCategories: [],
};

export default (state = initialState, action: CategoryAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case recommendCategoriesActionTypes.SUCCESS: {
                const { payload } = action as RecommendCategoriesSuccessAction;

                draft.recommendCategories = draft.recommendCategories.concat(
                    payload.nodes,
                );
                break;
            }

            case relatedCategoriesActionTypes.SUCCESS: {
                const { payload } = action as RelatedCategoriesSuccessAction;

                draft.relatedCategories = payload;
                break;
            }
            default: {
                return state;
            }
        }
    });
