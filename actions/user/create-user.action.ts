import {
    CreateUserFailureAction,
    CreateUserRequestAction,
    CreateUserRequestPayload,
    CreateUserSuccessAction,
} from './create-user.interface';

const REQUEST_NAME = 'CREATE_USER';

export const createUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function createUserRequest(
    payload: CreateUserRequestPayload,
): CreateUserRequestAction {
    return {
        type: createUserActionTypes.REQUEST,
        payload,
    };
}

export function createUserSuccess(): CreateUserSuccessAction {
    return {
        type: createUserActionTypes.SUCCESS,
    };
}

export function createUserFailure(error: string): CreateUserFailureAction {
    return {
        type: createUserActionTypes.FAILURE,
        error,
    };
}
