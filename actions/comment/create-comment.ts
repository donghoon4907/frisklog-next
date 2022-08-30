export enum CreateCommentAction {
    REQUEST = 'COMMENT_CREATE_REQUEST',
    SUCCESS = 'COMMENT_CREATE_SUCCESS',
    FAILURE = 'COMMENT_CREATE_FAILURE',
}

export interface CreateCommentPayload {
    content: string;
}
