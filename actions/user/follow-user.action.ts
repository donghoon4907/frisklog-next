import {
    FollowUserFailureAction,
    FollowUserRequestAction,
    FollowUserRequestPayload,
    FollowUserSuccessAction,
} from './follow-user.interface';

const REQUEST_NAME = 'FOLLOW_USER';

export const followUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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
