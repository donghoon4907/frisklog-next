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

type CommonAction =
    | UploadImageAction
    | LoginModalAction
    | UserModalAction
    | PostModalAction
    | SearchBarAction
    | ThemeModeAction;

export interface CommonState {
    isShowLoginModal: boolean;
    isShowPostModal: boolean;
    isShowUserModal: boolean;
    isShowSearchBar: boolean;
    mode: ModeType;
    recentUploadedImage: string | null;
}

const initialState: CommonState = {
    isShowLoginModal: false,
    isShowPostModal: false,
    isShowUserModal: false,
    isShowSearchBar: false,
    mode: 'light',
    recentUploadedImage: null,
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
            default: {
                return state;
            }
        }
    });
