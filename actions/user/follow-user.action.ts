import {
    FollowUserRequestAction,
    FollowUserRequestPayload,
    FollowUserSuccessAction,
    FollowUserSuccessPayload,
} from './follow-user.interface';

export const FOLLOW_USER_KEY = 'FOLLOW_USER';

export const followUserActionTypes = {
    REQUEST: `${FOLLOW_USER_KEY}_REQUEST`,
    SUCCESS: `${FOLLOW_USER_KEY}_SUCCESS`,
    FAILURE: `${FOLLOW_USER_KEY}_FAILURE`,
};

export function followUserRequest(
    payload: FollowUserRequestPayload,
): FollowUserRequestAction {
    return {
        type: followUserActionTypes.REQUEST,
        payload,
    };
}

export function followUserSuccess(
    payload: FollowUserSuccessPayload,
): FollowUserSuccessAction {
    return {
        type: followUserActionTypes.SUCCESS,
        payload,
    };
}
