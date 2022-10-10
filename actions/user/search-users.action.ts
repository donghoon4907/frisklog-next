import {
    SearchUsersRequestAction,
    SearchUsersRequestPayload,
    SearchUsersSuccessAction,
    SearchUsersSuccessPayload,
} from './search-users.interface';

export const SEARCH_USERS_KEY = 'SEARCH_USERS';

export const searchUsersActionTypes = {
    REQUEST: `${SEARCH_USERS_KEY}_REQUEST`,
    SUCCESS: `${SEARCH_USERS_KEY}_SUCCESS`,
    FAILURE: `${SEARCH_USERS_KEY}_FAILURE`,
};

export function searchUsersRequest(
    payload: SearchUsersRequestPayload,
): SearchUsersRequestAction {
    return {
        type: searchUsersActionTypes.REQUEST,
        payload,
    };
}

export function searchUsersSuccess(
    payload: SearchUsersSuccessPayload,
): SearchUsersSuccessAction {
    return {
        type: searchUsersActionTypes.SUCCESS,
        payload,
    };
}
