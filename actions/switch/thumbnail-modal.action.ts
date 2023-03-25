import {
    ThumbnailModalHideAction,
    ThumbnailModalShowAction,
} from './thumbnail-modal.interface';

const REQUEST_NAME = 'THUMBNAIL_MODAL';

export const thumbnailModalActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showThumbnailModal(): ThumbnailModalShowAction {
    return {
        type: thumbnailModalActionTypes.SHOW,
    };
}

export function hideThumbnailModal(): ThumbnailModalHideAction {
    return {
        type: thumbnailModalActionTypes.HIDE,
    };
}
