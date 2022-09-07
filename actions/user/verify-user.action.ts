import {
    VerifyUserFailureAction,
    VerifyUserRequestAction,
    VerifyUserRequestPayload,
    VerifyUserSuccessAction,
} from './verify-user.interface';

const REQUEST_NAME = 'LOGIN_USER';

export const verifyUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    SUCCESS: `${REQUEST_NAME}_SUCCESS`,
    FAILURE: `${REQUEST_NAME}_FAILURE`,
};

export function verifyUserRequest(
    payload: VerifyUserRequestPayload,
): VerifyUserRequestAction {
    return {
        type: verifyUserActionTypes.REQUEST,
        payload,
    };
}

export function verifyUserSuccess(): VerifyUserSuccessAction {
    return {
        type: verifyUserActionTypes.SUCCESS,
    };
}

export function verifyUserFailure(error: string): VerifyUserFailureAction {
    return {
        type: verifyUserActionTypes.FAILURE,
        error,
    };
}
