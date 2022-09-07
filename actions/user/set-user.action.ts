import {
    SetUserCleanUpAction,
    SetUserRequestAction,
    SetUserRequestPayload,
} from './set-user.interface';

const REQUEST_NAME = 'SET_USER';

export const setUserActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    CLEANUP: `${REQUEST_NAME}_CLEANUP`,
};

export function setUserRequest(
    payload: SetUserRequestPayload,
): SetUserRequestAction {
    return {
        type: setUserActionTypes.REQUEST,
        payload,
    };
}

export function setUserCleanUp(): SetUserCleanUpAction {
    return {
        type: setUserActionTypes.CLEANUP,
    };
}
