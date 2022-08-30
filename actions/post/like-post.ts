export enum LikePostAction {
    REQUEST = 'POST_LIKE_REQUEST',
    SUCCESS = 'POST_LIKE_SUCCESS',
    FAILURE = 'POST_LIKE_FAILURE',
}

export interface LikePostPayload {
    id: number;
}
