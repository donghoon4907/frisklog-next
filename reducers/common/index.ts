import produce from 'immer';

import { SwitchAction } from '../../actions/switch';
import { LoginModalAction } from '../../actions/switch/login-modal';
import { PostModalAction } from '../../actions/switch/post-modal';
import { SearchBarAction } from '../../actions/switch/search-bar';
import { ThemeModeAction } from '../../actions/switch/theme-mode';
import { UserModalAction } from '../../actions/switch/user-modal';

const initialState: Record<string, any> = {
    isShowLoginModal: false,
    isShowPostModal: false,
    isShowUserModal: false,
    isShowSearchBar: false,
    mode: 'light',
};

export default (state = initialState, { type }: SwitchAction) =>
    produce(state, draft => {
        switch (type) {
            // Login
            case LoginModalAction.SHOW: {
                draft.isShowLoginModal = true;
                break;
            }
            case LoginModalAction.HIDE: {
                draft.isShowLoginModal = false;
                break;
            }
            // Post
            case PostModalAction.SHOW: {
                draft.isShowPostModal = true;
                break;
            }
            case PostModalAction.HIDE: {
                draft.isShowPostModal = false;
                break;
            }
            // User
            case UserModalAction.SHOW: {
                draft.isShowUserModal = true;
                break;
            }
            case UserModalAction.HIDE: {
                draft.isShowUserModal = false;
                break;
            }
            // Search
            case SearchBarAction.SHOW: {
                draft.isShowSearchBar = true;
                break;
            }
            case SearchBarAction.HIDE: {
                draft.isShowSearchBar = false;
                break;
            }
            // Theme
            case ThemeModeAction.LIGHT: {
                draft.mode = 'light';
                break;
            }
            case ThemeModeAction.DARK: {
                draft.mode = 'dark';
                break;
            }
            default: {
                return state;
            }
        }
    });
