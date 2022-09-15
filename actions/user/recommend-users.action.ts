import {
    RecommendUsersRequestAction,
    RecommendUsersRequestPayload,
    RecommendUsersSuccessAction,
    RecommendUsersSuccessPayload,
} from './recommend-users.interface';

export const RECOMMEND_USERS_KEY = 'RECOMMEND_USERS';

export const recommendUsersActionTypes = {
    REQUEST: `${RECOMMEND_USERS_KEY}_REQUEST`,
    SUCCESS: `${RECOMMEND_USERS_KEY}_SUCCESS`,
    FAILURE: `${RECOMMEND_USERS_KEY}_FAILURE`,
};

export function recommendUsersRequest(
    payload: RecommendUsersRequestPayload,
): RecommendUsersRequestAction {
    return {
        type: recommendUsersActionTypes.REQUEST,
        payload,
    };
}

export function recommendUsersSuccess(
    payload: RecommendUsersSuccessPayload,
): RecommendUsersSuccessAction {
    return {
        type: recommendUsersActionTypes.SUCCESS,
        payload,
    };
}
