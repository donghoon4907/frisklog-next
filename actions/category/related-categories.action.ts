import {
    RelatedCategoriesRequestAction,
    RelatedCategoriesRequestPayload,
    RelatedCategoriesSuccessAction,
    RelatedCategoriesSuccessPayload,
} from './related-categories.interface';

export const RELATED_CATEGORIES_KEY = 'RELATED_CATEGORIES';

export const relatedCategoriesActionTypes = {
    REQUEST: `${RELATED_CATEGORIES_KEY}_REQUEST`,
    SUCCESS: `${RELATED_CATEGORIES_KEY}_SUCCESS`,
    FAILURE: `${RELATED_CATEGORIES_KEY}_FAILURE`,
};

export function relatedCategoriesRequest(
    payload: RelatedCategoriesRequestPayload,
): RelatedCategoriesRequestAction {
    return {
        type: relatedCategoriesActionTypes.REQUEST,
        payload,
    };
}

export function relatedCategoriesSuccess(
    payload: RelatedCategoriesSuccessPayload,
): RelatedCategoriesSuccessAction {
    return {
        type: relatedCategoriesActionTypes.SUCCESS,
        payload,
    };
}
