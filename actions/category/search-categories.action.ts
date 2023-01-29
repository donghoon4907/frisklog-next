import {
    SearchCategoriesRequestAction,
    SearchCategoriesRequestPayload,
    SearchCategoriesSuccessAction,
    SearchCategoriesSuccessPayload,
} from './search-categories.interface';

export const SEARCH_CATEGORIES_KEY = 'SEARCH_CATEGORIES';

export const searchCategoriesActionTypes = {
    REQUEST: `${SEARCH_CATEGORIES_KEY}_REQUEST`,
    SUCCESS: `${SEARCH_CATEGORIES_KEY}_SUCCESS`,
    FAILURE: `${SEARCH_CATEGORIES_KEY}_FAILURE`,
};

export function searchCategoriesRequest(
    payload: SearchCategoriesRequestPayload,
): SearchCategoriesRequestAction {
    return {
        type: searchCategoriesActionTypes.REQUEST,
        payload,
    };
}

export function searchCategoriesSuccess(
    payload: SearchCategoriesSuccessPayload,
): SearchCategoriesSuccessAction {
    return {
        type: searchCategoriesActionTypes.SUCCESS,
        payload,
    };
}
