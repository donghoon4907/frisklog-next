import produce from 'immer';

import { RecommendCategory } from '../../interfaces/category';
import { CategoryAction } from '../../actions/category';
import { recommendCategoriesActionTypes } from '../../actions/category/recommend-categories.action';
import { RecommendCategoriesSuccessAction } from '../../actions/category/recommend-categories.interface';

export interface CategoryState {
    recommendCategories: RecommendCategory[];
}

const initialState: CategoryState = {
    recommendCategories: [],
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
            default: {
                return state;
            }
        }
    });
