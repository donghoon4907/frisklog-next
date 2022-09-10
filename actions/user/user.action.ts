import {
    SetUserCleanUpAction,
    SetUserRequestAction,
    SetUserRequestPayload,
} from './set-user.interface';

export const USER_KEY = 'USER';

export const userActionTypes = {
    SET: `SET_${USER_KEY}`,
    INIT: `INIT_${USER_KEY}`,
};

export function setUser(payload: SetUserRequestPayload): SetUserRequestAction {
    return {
        type: userActionTypes.SET,
        payload,
    };
}

export function initUser(): SetUserCleanUpAction {
    return {
        type: userActionTypes.INIT,
    };
}
