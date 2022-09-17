import {
    RecommendCategoriesRequestAction,
    RecommendCategoriesRequestPayload,
    RecommendCategoriesSuccessAction,
    RecommendCategoriesSuccessPayload,
} from './recommend-categories.interface';

export const RECOMMEND_USERS_KEY = 'RECOMMEND_CATEGORIES';

export const recommendCategoriesActionTypes = {
    REQUEST: `${RECOMMEND_USERS_KEY}_REQUEST`,
    SUCCESS: `${RECOMMEND_USERS_KEY}_SUCCESS`,
    FAILURE: `${RECOMMEND_USERS_KEY}_FAILURE`,
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
