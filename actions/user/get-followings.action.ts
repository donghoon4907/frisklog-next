import {
    GetFollowingsRequestAction,
    GetFollowingsRequestPayload,
    GetFollowingsSuccessAction,
    GetFollowingsSuccessPayload,
} from './get-followings.interface';

export const GET_FOLLOWINGS_KEY = 'GET_FOLLOWINGS';

export const getFollowingsActionTypes = {
    REQUEST: `${GET_FOLLOWINGS_KEY}_REQUEST`,
    SUCCESS: `${GET_FOLLOWINGS_KEY}_SUCCESS`,
    FAILURE: `${GET_FOLLOWINGS_KEY}_FAILURE`,
};

export function getFollowingsRequest(
    payload: GetFollowingsRequestPayload,
): GetFollowingsRequestAction {
    return {
        type: getFollowingsActionTypes.REQUEST,
        payload,
    };
}

export function getFollowingsSuccess(
    payload: GetFollowingsSuccessPayload,
): GetFollowingsSuccessAction {
    return {
        type: getFollowingsActionTypes.SUCCESS,
        payload,
    };
}
