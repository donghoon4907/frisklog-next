import {
    UpdateUserFailureAction,
    UpdateUserRequestAction,
    UpdateUserRequestPayload,
    UpdateUserSuccessAction,
} from './update-user.interface';

const UPDATE_USER_KEY = 'UPDATE_USER';

export const updateUserActionTypes = {
    REQUEST: `${UPDATE_USER_KEY}_REQUEST`,
    SUCCESS: `${UPDATE_USER_KEY}_SUCCESS`,
    FAILURE: `${UPDATE_USER_KEY}_FAILURE`,
};

export function updateUserRequest(
    payload: UpdateUserRequestPayload,
): UpdateUserRequestAction {
    return {
        type: updateUserActionTypes.REQUEST,
        payload,
    };
}

export function updateUserSuccess(): UpdateUserSuccessAction {
    return {
        type: updateUserActionTypes.SUCCESS,
    };
}

export function updateUserFailure(error: string): UpdateUserFailureAction {
    return {
        type: updateUserActionTypes.FAILURE,
        error,
    };
}
