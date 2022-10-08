import {
    RecommendCategoriesRequestAction,
    RecommendCategoriesRequestPayload,
    RecommendCategoriesSuccessAction,
    RecommendCategoriesSuccessPayload,
} from './recommend-categories.interface';

export const RECOMMEND_CATEGORIES_KEY = 'RECOMMEND_CATEGORIES';

export const recommendCategoriesActionTypes = {
    REQUEST: `${RECOMMEND_CATEGORIES_KEY}_REQUEST`,
    SUCCESS: `${RECOMMEND_CATEGORIES_KEY}_SUCCESS`,
    FAILURE: `${RECOMMEND_CATEGORIES_KEY}_FAILURE`,
};

export function recommendCategoriesRequest(
    payload: RecommendCategoriesRequestPayload,
): RecommendCategoriesRequestAction {
    return {
        type: recommendCategoriesActionTypes.REQUEST,
        payload,
    };
}

export function recommendCategoriesSuccess(
    payload: RecommendCategoriesSuccessPayload,
): RecommendCategoriesSuccessAction {
    return {
        type: recommendCategoriesActionTypes.SUCCESS,
        payload,
    };
}
