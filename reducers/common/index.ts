import produce from 'immer';

import { ModeType } from '../../types/mode';
import {
    UploadImageAction,
    UploadImageSuccessAction,
} from '../../actions/upload/image.interface';
import { LoginModalAction } from '../../actions/switch/login-modal.interface';
import { UserModalAction } from '../../actions/switch/user-modal.interface';
import { PostModalAction } from '../../actions/switch/post-modal.interface';
import { SearchBarAction } from '../../actions/switch/search-bar.interface';
import { ThemeModeAction } from '../../actions/switch/theme-mode.interface';
import { uploadImageActionTypes } from '../../actions/upload/image.action';
import { loginModalActionTypes } from '../../actions/switch/login-modal.action';
import { postModalActionTypes } from '../../actions/switch/post-modal.action';
import { userModalActionTypes } from '../../actions/switch/user-modal.action';
import { searchBarActionTypes } from '../../actions/switch/search-bar.action';
import { themeModeActionTypes } from '../../actions/switch/theme-mode.action';
import { NotificationFilterAction } from '../../actions/switch/notification-filter.interface';
import { notificationFilterActionTypes } from '../../actions/switch/notification-filter.action';
import { ThumbnailModalAction } from '../../actions/switch/thumbnail-modal.interface';
import { thumbnailModalActionTypes } from '../../actions/switch/thumbnail-modal.action';
import { PhotoPopupAction } from '../../actions/switch/photo-popup.interface';
import { photoPopupActionTypes } from '../../actions/switch/photo-popup.action';

type CommonAction =
    | UploadImageAction
    | LoginModalAction
    | UserModalAction
    | PostModalAction
    | SearchBarAction
    | ThemeModeAction
    | NotificationFilterAction
    | ThumbnailModalAction
    | PhotoPopupAction;

export interface CommonState {
    isShowLoginModal: boolean;
    isShowPostModal: boolean;
    isShowUserModal: boolean;
    isShowSearchBar: boolean;
    mode: ModeType;
    recentUploadedImage: string | null;
    isShowNotificationFilter: boolean;
    isShowThumbnailModal: boolean;
    isShowPhotoPopup: boolean;
}

const initialState: CommonState = {
    isShowLoginModal: false,
    isShowPostModal: false,
    isShowUserModal: false,
    isShowSearchBar: false,
    mode: 'light',
    recentUploadedImage: null,
    isShowNotificationFilter: false,
    isShowThumbnailModal: false,
    isShowPhotoPopup: false,
};

export default (state = initialState, action: CommonAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Login
            case loginModalActionTypes.SHOW: {
                draft.isShowLoginModal = true;
                break;
            }
            case loginModalActionTypes.HIDE: {
                draft.isShowLoginModal = false;
                break;
            }
            // Post
            case postModalActionTypes.SHOW: {
                draft.isShowPostModal = true;
                break;
            }
            case postModalActionTypes.HIDE: {
                draft.isShowPostModal = false;
                break;
            }
            // User
            case userModalActionTypes.SHOW: {
                draft.isShowUserModal = true;
                break;
            }
            case userModalActionTypes.HIDE: {
                draft.isShowUserModal = false;
                break;
            }
            // Search
            case searchBarActionTypes.SHOW: {
                draft.isShowSearchBar = true;
                break;
            }
            case searchBarActionTypes.HIDE: {
                draft.isShowSearchBar = false;
                break;
            }
            // Theme
            case themeModeActionTypes.LIGHT: {
                draft.mode = 'light';
                break;
            }
            case themeModeActionTypes.DARK: {
                draft.mode = 'dark';
                break;
            }
            // Upload image
            case uploadImageActionTypes.SUCCESS: {
                draft.recentUploadedImage = (
                    action as UploadImageSuccessAction
                ).payload.fileName;
                break;
            }
            case uploadImageActionTypes.CLEANUP: {
                draft.recentUploadedImage = null;
                break;
            }
            // Notification filter
            case notificationFilterActionTypes.SHOW: {
                draft.isShowNotificationFilter = true;
                break;
            }
            case notificationFilterActionTypes.HIDE: {
                draft.isShowNotificationFilter = false;
                break;
            }
            // Thumbnail
            case thumbnailModalActionTypes.SHOW: {
                draft.isShowThumbnailModal = true;
                break;
            }
            case thumbnailModalActionTypes.HIDE: {
                draft.isShowThumbnailModal = false;
                break;
            }
            // Photo
            case photoPopupActionTypes.SHOW: {
                draft.isShowPhotoPopup = true;
                break;
            }
            case photoPopupActionTypes.HIDE: {
                draft.isShowPhotoPopup = false;
                break;
            }
            default: {
                return state;
            }
        }
    });
