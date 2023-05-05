import type {
    SearchKeywordsRequestAction,
    SearchKeywordsRequestPayload,
    SearchKeywordsSuccessAction,
    SearchKeywordsSuccessPayload,
} from './search-keywords.interface';

export const SEARCH_KEYWORDS_KEY = 'SEARCH_KEYWORDS';

export const searchKeywordsActionTypes = {
    REQUEST: `${SEARCH_KEYWORDS_KEY}_REQUEST`,
    SUCCESS: `${SEARCH_KEYWORDS_KEY}_SUCCESS`,
    FAILURE: `${SEARCH_KEYWORDS_KEY}_FAILURE`,
};

export function searchKeywordsRequest(
    payload: SearchKeywordsRequestPayload,
): SearchKeywordsRequestAction {
    return {
        type: searchKeywordsActionTypes.REQUEST,
        payload,
    };
}

export function searchKeywordsSuccess(
    payload: SearchKeywordsSuccessPayload,
): SearchKeywordsSuccessAction {
    return {
        type: searchKeywordsActionTypes.SUCCESS,
        payload,
    };
}
