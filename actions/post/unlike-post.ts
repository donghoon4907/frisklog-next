export enum UnlikePostAction {
    REQUEST = 'POST_UNLIKE_REQUEST',
    SUCCESS = 'POST_UNLIKE_SUCCESS',
    FAILURE = 'POST_UNLIKE_FAILURE',
}

export interface UnlikePostPayload {
    id: number;
}
