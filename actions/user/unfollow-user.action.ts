import {
    UnfollowUserRequestAction,
    UnfollowUserRequestPayload,
    UnfollowUserSuccessAction,
    UnfollowUserSuccessPayload,
} from './unfollow-user.interface';

const UNFOLLOW_USER_KEY = 'UNFOLLOW_USER';

export const unfollowUserActionTypes = {
    REQUEST: `${UNFOLLOW_USER_KEY}_REQUEST`,
    SUCCESS: `${UNFOLLOW_USER_KEY}_SUCCESS`,
    FAILURE: `${UNFOLLOW_USER_KEY}_FAILURE`,
};

export function unfollowUserRequest(
    payload: UnfollowUserRequestPayload,
): UnfollowUserRequestAction {
    return {
        type: unfollowUserActionTypes.REQUEST,
        payload,
    };
}

export function unfollowUserSuccess(
    payload: UnfollowUserSuccessPayload,
): UnfollowUserSuccessAction {
    return {
        type: unfollowUserActionTypes.SUCCESS,
        payload,
    };
}
