import {
    UserModalHideAction,
    UserModalShowAction,
} from './user-modal.interface';

const REQUEST_NAME = 'USER_MODAL';

export const userModalActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showUserModal(): UserModalShowAction {
    return {
        type: userModalActionTypes.SHOW,
    };
}

export function hideUserModal(): UserModalHideAction {
    return {
        type: userModalActionTypes.HIDE,
    };
}
