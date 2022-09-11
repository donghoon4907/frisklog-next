import {
    FollowUserFailureAction,
    FollowUserRequestAction,
    FollowUserRequestPayload,
    FollowUserSuccessAction,
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

export function followUserSuccess(): FollowUserSuccessAction {
    return {
        type: followUserActionTypes.SUCCESS,
    };
}

export function followUserFailure(error: string): FollowUserFailureAction {
    return {
        type: followUserActionTypes.FAILURE,
        error,
    };
}