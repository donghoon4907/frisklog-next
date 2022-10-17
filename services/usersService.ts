import { client } from '../graphql/client';
import { CreateUserRequestPayload } from '../actions/user/create-user.interface';
import { MUTATION_CREATE_USER } from '../graphql/mutation/user/create-user';
import { UpdateUserRequestPayload } from '../actions/user/update-user.interface';
import { MUTATION_UPDATE_USER } from '../graphql/mutation/user/update-user';
import { FollowUserRequestPayload } from '../actions/user/follow-user.interface';
import { MUTATION_FOLLOW_USER } from '../graphql/mutation/user/follow-user';
import { UnfollowUserRequestPayload } from '../actions/user/unfollow-user.interface';
import { MUTATION_UNFOLLOW_USER } from '../graphql/mutation/user/unfollow-user';
import { LoginUserRequestPayload } from '../actions/user/login-user.interface';
import { MUTATION_LOGIN_USER } from '../graphql/mutation/user/login-user';
import { VerifyUserRequestPayload } from '../actions/user/verify-user.interface';
import { MUTATION_VERIFY_USER } from '../graphql/mutation/user/verify-user';
import { LoginGithubRequestPayload } from '../actions/user/login-github.interface';
import { MUTATION_GITHUB_LOGIN } from '../graphql/mutation/user/login-github';
import { RecommendUsersRequestPayload } from '../actions/user/recommend-users.interface';
import { GET_RECOMMENDERS } from '../graphql/query/user/recommenders';
import { GetUserRequestPayload } from '../actions/user/get-user.interface';
import { GET_USER } from '../graphql/query/user/user';
import { GetFollowingsRequestPayload } from '../actions/user/get-followings.interface';
import { GET_FOLLOWINGS } from '../graphql/query/user/followings';
import { GetUsersRequestPayload } from '../actions/user/get-users.interface';
import { GET_USERS } from '../graphql/query/user/users';
import { LOAD_USER } from '../graphql/query/user/load-user';
import { UpdateSettingRequestPayload } from '../actions/user/update-setting.interface';
import { MUTATION_UPDATE_SETTING } from '../graphql/mutation/user/update-setting';

export function createUser(payload: CreateUserRequestPayload) {
    return client.request(MUTATION_CREATE_USER, payload);
}

export function updateUser(payload: UpdateUserRequestPayload) {
    return client.request(MUTATION_UPDATE_USER, payload);
}

export function followUser(payload: FollowUserRequestPayload) {
    return client.request(MUTATION_FOLLOW_USER, payload);
}

export function unfollowUser(payload: UnfollowUserRequestPayload) {
    return client.request(MUTATION_UNFOLLOW_USER, payload);
}

export function loginUser(payload: LoginUserRequestPayload) {
    return client.request(MUTATION_LOGIN_USER, payload);
}

export function verifyUser(payload: VerifyUserRequestPayload) {
    return client.request(MUTATION_VERIFY_USER, payload);
}

export function loginGithub(payload: LoginGithubRequestPayload) {
    return client.request(MUTATION_GITHUB_LOGIN, payload);
}

export function getRecommenders(payload: RecommendUsersRequestPayload) {
    return client.request(GET_RECOMMENDERS, payload);
}

export function getUsers(payload: GetUsersRequestPayload) {
    return client.request(GET_USERS, payload);
}

export function getUser(payload: GetUserRequestPayload) {
    return client.request(GET_USER, payload);
}

export function loadUser() {
    return client.request(LOAD_USER);
}

export function getFollowings(payload: GetFollowingsRequestPayload) {
    return client.request(GET_FOLLOWINGS, payload);
}

export function updateSetting(payload: UpdateSettingRequestPayload) {
    return client.request(MUTATION_UPDATE_SETTING, payload);
}
