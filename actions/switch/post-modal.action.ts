import {
    PostModalHideAction,
    PostModalShowAction,
} from './post-modal.interface';

const REQUEST_NAME = 'POST_MODAL';

export const postModalActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showPostModal(): PostModalShowAction {
    return {
        type: postModalActionTypes.SHOW,
    };
}

export function hidePostModal(): PostModalHideAction {
    return {
        type: postModalActionTypes.HIDE,
    };
}
