import {
    LoadUserRequestAction,
    LoadUserSuccessAction,
} from './load-user.interface';

export const LOAD_USER_KEY = 'LOAD_USER';

export const loadUserActionTypes = {
    REQUEST: `${LOAD_USER_KEY}_REQUEST`,
    SUCCESS: `${LOAD_USER_KEY}_SUCCESS`,
    FAILURE: `${LOAD_USER_KEY}_FAILURE`,
};

export function loadUserRequest(): LoadUserRequestAction {
    return {
        type: loadUserActionTypes.REQUEST,
    };
}

export function loadUserSuccess(): LoadUserSuccessAction {
    return {
        type: loadUserActionTypes.SUCCESS,
    };
}
