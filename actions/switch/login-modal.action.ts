import {
    LoginModalHideAction,
    LoginModalShowAction,
} from './login-modal.interface';

const REQUEST_NAME = 'LOGIN_MODAL';

export const loginModalActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showLoginModal(): LoginModalShowAction {
    return {
        type: loginModalActionTypes.SHOW,
    };
}

export function hideLoginModal(): LoginModalHideAction {
    return {
        type: loginModalActionTypes.HIDE,
    };
}
