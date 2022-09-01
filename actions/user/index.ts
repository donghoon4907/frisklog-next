import { PayloadAction } from '..';
import { CreateUserAction } from './create-user';
import { FollowUserAction } from './follow-user';
import { LoadUserAction } from './load-user';
import { LoginGithubAction } from './login-github';
import { LoginUserAction } from './login-user';
import { UnfollowUserAction } from './unfollow-user';
import { UpdateUserAction } from './update-user';
import { VerifyUserAction } from './verify-user';

export type UserActionTypes =
    | CreateUserAction
    | UpdateUserAction
    | FollowUserAction
    | UnfollowUserAction
    | LoginUserAction
    | VerifyUserAction
    | LoginGithubAction
    | LoadUserAction;

export type UserAction = PayloadAction<UserActionTypes>;
