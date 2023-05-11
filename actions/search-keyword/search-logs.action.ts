import type {
    SearchLogsRequestAction,
    SearchLogsRequestPayload,
    SearchLogsSuccessAction,
    SearchLogsSuccessPayload,
} from './search-logs.interface';

export const SEARCH_LOGS_KEY = 'SEARCH_LOGS';

export const searchLogsActionTypes = {
    REQUEST: `${SEARCH_LOGS_KEY}_REQUEST`,
    SUCCESS: `${SEARCH_LOGS_KEY}_SUCCESS`,
    FAILURE: `${SEARCH_LOGS_KEY}_FAILURE`,
};

export function searchLogsRequest(
    payload: SearchLogsRequestPayload,
): SearchLogsRequestAction {
    return {
        type: searchLogsActionTypes.REQUEST,
        payload,
    };
}

export function searchLogsSuccess(
    payload: SearchLogsSuccessPayload,
): SearchLogsSuccessAction {
    return {
        type: searchLogsActionTypes.SUCCESS,
        payload,
    };
}
