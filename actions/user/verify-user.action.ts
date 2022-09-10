import {
    VerifyUserFailureAction,
    VerifyUserRequestAction,
    VerifyUserRequestPayload,
    VerifyUserSuccessAction,
} from './verify-user.interface';

export const VERIFY_USER_KEY = 'VERIFY_USER';

export const verifyUserActionTypes = {
    REQUEST: `${VERIFY_USER_KEY}_REQUEST`,
    SUCCESS: `${VERIFY_USER_KEY}_SUCCESS`,
    FAILURE: `${VERIFY_USER_KEY}_FAILURE`,
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
