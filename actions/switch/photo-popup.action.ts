import {
    PhotoPopupHideAction,
    PhotoPopupShowAction,
} from './photo-popup.interface';

const REQUEST_NAME = 'PHOTO_POPUP';

export const photoPopupActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showPhotoPopup(): PhotoPopupShowAction {
    return {
        type: photoPopupActionTypes.SHOW,
    };
}

export function hidePhotoPopup(): PhotoPopupHideAction {
    return {
        type: photoPopupActionTypes.HIDE,
    };
}
