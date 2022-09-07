import {
    UnfollowUserFailureAction,
    UnfollowUserRequestAction,
    UnfollowUserRequestPayload,
    UnfollowUserSuccessAction,
} from './unfollow-user.interface';

const REQUEST_NAME = 'UNFOLLOW_USER';

export const unfollowUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function unfollowUserRequest(
    payload: UnfollowUserRequestPayload,
): UnfollowUserRequestAction {
    return {
        type: unfollowUserActionTypes.REQUEST,
        payload,
    };
}

export function unfollowUserSuccess(): UnfollowUserSuccessAction {
    return {
        type: unfollowUserActionTypes.SUCCESS,
    };
}

export function unfollowUserFailure(error: string): UnfollowUserFailureAction {
    return {
        type: unfollowUserActionTypes.FAILURE,
        error,
    };
}
