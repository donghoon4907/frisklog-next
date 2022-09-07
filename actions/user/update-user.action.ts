import {
    UpdateUserFailureAction,
    UpdateUserRequestAction,
    UpdateUserRequestPayload,
    UpdateUserSuccessAction,
} from './update-user.interface';

const REQUEST_NAME = 'UPDATE_USER';

export const updateUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
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
