import produce from 'immer';

import { Category } from '../../interfaces/category';
import { CategoryAction } from '../../actions/category';
import { recommendCategoriesActionTypes } from '../../actions/category/recommend-categories.action';
import { RecommendCategoriesSuccessAction } from '../../actions/category/recommend-categories.interface';
import { relatedCategoriesActionTypes } from '../../actions/category/related-categories.action';
import { RelatedCategoriesSuccessAction } from '../../actions/category/related-categories.interface';
import { searchCategoriesActionTypes } from '../../actions/category/search-categories.action';
import { SearchCategoriesSuccessAction } from '../../actions/category/search-categories.interface';

export interface CategoryState {
    searchCategories: Category[];
    recommendCategories: Category[];
    relatedCategories: Category[];
}

const initialState: CategoryState = {
    searchCategories: [],
    recommendCategories: [],
    relatedCategories: [],
};

export default (state = initialState, action: CategoryAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case searchCategoriesActionTypes.SUCCESS: {
                const { payload } = action as SearchCategoriesSuccessAction;

                draft.searchCategories = draft.searchCategories.concat(
                    payload.nodes,
                );
                break;
            }

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
