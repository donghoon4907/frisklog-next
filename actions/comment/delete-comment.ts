export enum DeleteCommentAction {
    REQUEST = 'COMMENT_DELETE_REQUEST',
    SUCCESS = 'COMMENT_DELETE_SUCCESS',
    FAILURE = 'COMMENT_DELETE_FAILURE',
}

export interface DeleteCommentPayload {
    id: number;
}
