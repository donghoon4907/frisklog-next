import { CreateUserAction } from './create-user.interface';
import { FollowUserAction } from './follow-user.interface';
import { GetUserAction } from './get-user.interface';
import { LoginGithubAction } from './login-github.interface';
import { LoginUserAction } from './login-user.interface';
import { LogoutUserAction } from './logout-user.interface';
import { RecommendUsersAction } from './recommend-users.interface';
import { SearchUserssAction } from './search-users.interface';
import { SetUserAction } from './set-user.interface';
import { UnfollowUserAction } from './unfollow-user.interface';
import { UpdateSettingAction } from './update-setting.interface';
import { UpdateUserAction } from './update-user.interface';
import { VerifyUserAction } from './verify-user.interface';

export type UserAction =
    | SetUserAction
    | CreateUserAction
    | UpdateUserAction
    | FollowUserAction
    | UnfollowUserAction
    | LoginUserAction
    | VerifyUserAction
    | LoginGithubAction
    | RecommendUsersAction
    | GetUserAction
    | LogoutUserAction
    | SearchUserssAction
    | UpdateSettingAction;
