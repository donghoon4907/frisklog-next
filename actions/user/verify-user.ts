export enum VerifyUserAction {
    REQUEST = 'USER_VERIFY_REQUEST',
    SUCCESS = 'USER_VERIFY_SUCCESS',
    FAILURE = 'USER_VERIFY_FAILURE',
}

export interface VerifyUserPayload {
    email: string;
    isKeep: boolean;
    captcha: string;
}
