export enum DeletePostAction {
    REQUEST = 'POST_DELETE_REQUEST',
    SUCCESS = 'POST_DELETE_SUCCESS',
    FAILURE = 'POST_DELETE_FAILURE',
}

export interface DeletePostPayload {
    id: number;
}
