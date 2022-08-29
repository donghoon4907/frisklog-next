export enum LoginUserAction {
    REQUEST = 'USER_LOGIN_REQUEST',
    SUCCESS = 'USER_LOGIN_SUCCESS',
    FAILURE = 'USER_LOGIN_FAILURE',
}

export interface LoginUserPayload {
    email: string;
}
