export enum LoadUserAction {
    LOAD = 'LOAD_USER_PROFILE',
    INIT = 'INIT_USER_PROFILE',
}

export interface LoadUserPayload {
    id: string;
    nickname: string;
    avatar: string;
    isMaster: boolean;
}
