export enum UnfollowUserAction {
    REQUEST = 'USER_UNFOLLOW_REQUEST',
    SUCCESS = 'USER_UNFOLLOW_SUCCESS',
    FAILURE = 'USER_UNFOLLOW_FAILURE',
}

export interface UnfollowUserPayload {
    id: number;
}
