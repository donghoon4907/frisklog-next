export enum CreatePostAction {
    REQUEST = 'POST_CREATE_REQUEST',
    SUCCESS = 'POST_CREATE_SUCCESS',
    FAILURE = 'POST_CREATE_FAILURE',
}

export interface CreatePostPayload {
    content: string;
    categories: string[];
}
