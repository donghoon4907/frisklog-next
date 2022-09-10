import {
    CreateUserFailureAction,
    CreateUserRequestAction,
    CreateUserRequestPayload,
    CreateUserSuccessAction,
} from './create-user.interface';

export const CREATE_USER_KEY = 'CREATE_USER';

export const createUserActionTypes = {
    REQUEST: `${CREATE_USER_KEY}_REQUEST`,
    SUCCESS: `${CREATE_USER_KEY}_SUCCESS`,
    FAILURE: `${CREATE_USER_KEY}_FAILURE`,
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
