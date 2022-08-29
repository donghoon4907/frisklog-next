export enum UpdateUserAction {
    REQUEST = 'USER_UPDATE_REQUEST',
    SUCCESS = 'USER_UPDATE_SUCCESS',
    FAILURE = 'USER_UPDATE_FAILURE',
}

export interface UpdateUserPayload {
    nickname?: string;
    avatar?: string;
    status?: string;
    isKeep?: boolean;
}
