import { CreateCommentPayload } from './create-comment';

export enum UpdateCommentAction {
    REQUEST = 'COMMENT_UPDATE_REQUEST',
    SUCCESS = 'COMMENT_UPDATE_SUCCESS',
    FAILURE = 'COMMENT_UPDATE_FAILURE',
}

export interface UpdateCommentPayload extends CreateCommentPayload {
    id: number;
}
