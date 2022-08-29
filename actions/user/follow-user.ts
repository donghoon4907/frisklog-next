export enum FollowUserAction {
    REQUEST = 'USER_FOLLOW_REQUEST',
    SUCCESS = 'USER_FOLLOW_SUCCESS',
    FAILURE = 'USER_FOLLOW_FAILURE',
}

export interface FollowUserPayload {
    id: number;
}
