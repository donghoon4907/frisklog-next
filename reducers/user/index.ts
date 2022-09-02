import produce from 'immer';

import { UserAction } from '../../actions/user';
import { CreateUserAction } from '../../actions/user/create-user';
import { UpdateUserAction } from '../../actions/user/update-user';
import { FollowUserAction } from '../../actions/user/follow-user';
import { UnfollowUserAction } from '../../actions/user/unfollow-user';
import { LoginUserAction } from '../../actions/user/login-user';
import { VerifyUserAction } from '../../actions/user/verify-user';
import { LoginGithubAction } from '../../actions/user/login-github';
import { LoadUserAction } from '../../actions/user/load-user';

export interface IUserState {
    id: number | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
    isAddUserLoading: boolean;
    addUserErrorReason: string;
    isUpdateUserLoading: boolean;
    updateUserErrorReason: string;
    isFollowUserLoading: boolean;
    followUserErrorReason: string;
    isUnfollowUserLoading: boolean;
    unfollowUserErrorReason: string;
    isLoginUserLoading: boolean;
    loginUserErrorReason: string;
    isVerifyUserLoading: boolean;
    verifyUserErrorReason: string;
    isGithubLoginLoading: boolean;
    githubLoginErrorReason: string;
}

const initialState: IUserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
    isAddUserLoading: false,
    addUserErrorReason: '',
    isUpdateUserLoading: false,
    updateUserErrorReason: '',
    isFollowUserLoading: false,
    followUserErrorReason: '',
    isUnfollowUserLoading: false,
    unfollowUserErrorReason: '',
    isLoginUserLoading: false,
    loginUserErrorReason: '',
    isVerifyUserLoading: false,
    verifyUserErrorReason: '',
    isGithubLoginLoading: false,
    githubLoginErrorReason: '',
};

export default (state = initialState, { type, payload, error }: UserAction) =>
    produce(state, draft => {
        switch (type) {
            // Create
            case CreateUserAction.REQUEST: {
                draft.isAddUserLoading = true;
                break;
            }
            case CreateUserAction.SUCCESS: {
                draft.isAddUserLoading = false;
                break;
            }
            case CreateUserAction.FAILURE: {
                draft.isAddUserLoading = false;

                draft.addUserErrorReason = error;
                break;
            }
            // Update
            case UpdateUserAction.REQUEST: {
                draft.isUpdateUserLoading = true;
                break;
            }
            case UpdateUserAction.SUCCESS: {
                draft.isUpdateUserLoading = false;
                break;
            }
            case UpdateUserAction.FAILURE: {
                draft.isUpdateUserLoading = false;

                draft.updateUserErrorReason = error;
                break;
            }
            // Follow
            case FollowUserAction.REQUEST: {
                draft.isFollowUserLoading = true;
                break;
            }
            case FollowUserAction.SUCCESS: {
                draft.isFollowUserLoading = false;
                break;
            }
            case FollowUserAction.FAILURE: {
                draft.isFollowUserLoading = false;

                draft.followUserErrorReason = error;
                break;
            }
            // Unfollow
            case UnfollowUserAction.REQUEST: {
                draft.isUnfollowUserLoading = true;
                break;
            }
            case UnfollowUserAction.SUCCESS: {
                draft.isUnfollowUserLoading = false;
                break;
            }
            case UnfollowUserAction.FAILURE: {
                draft.isUnfollowUserLoading = false;

                draft.unfollowUserErrorReason = error;
                break;
            }
            // Login
            case LoginUserAction.REQUEST: {
                draft.isLoginUserLoading = true;
                break;
            }
            case LoginUserAction.SUCCESS: {
                draft.isLoginUserLoading = false;
                break;
            }
            case LoginUserAction.FAILURE: {
                draft.isLoginUserLoading = false;

                draft.loginUserErrorReason = error;
                break;
            }
            // Verify
            case VerifyUserAction.REQUEST: {
                draft.isVerifyUserLoading = true;
                break;
            }
            case VerifyUserAction.SUCCESS: {
                draft.isVerifyUserLoading = false;
                break;
            }
            case VerifyUserAction.FAILURE: {
                draft.isVerifyUserLoading = false;

                draft.verifyUserErrorReason = error;
                break;
            }
            // Github Login
            case LoginGithubAction.REQUEST: {
                draft.isGithubLoginLoading = true;
                break;
            }
            case LoginGithubAction.SUCCESS: {
                draft.isGithubLoginLoading = false;
                break;
            }
            case LoginGithubAction.FAILURE: {
                draft.isGithubLoginLoading = false;

                draft.githubLoginErrorReason = error;
                break;
            }
            // Load
            case LoadUserAction.LOAD: {
                draft.id = payload.id;

                draft.nickname = payload.nickname;

                draft.avatar = payload.avatar;

                draft.isMaster = payload.isMaster;
                break;
            }
            case LoadUserAction.INIT: {
                draft.id = null;

                draft.nickname = null;

                draft.avatar = null;

                draft.isMaster = null;
                break;
            }
            default: {
                return state;
            }
        }
    });
