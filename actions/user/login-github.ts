export enum LoginGithubAction {
    REQUEST = 'GITHUB_LOGIN_REQUEST',
    SUCCESS = 'GITHUB_LOGIN_SUCCESS',
    FAILURE = 'GITHUB_LOGIN_FAILURE',
}

export interface LoginGithubPayload {
    code: string;
}
