import { CreateUserPayload } from '../user/create-user';

export enum UpdatePostAction {
    REQUEST = 'POST_UPDATE_REQUEST',
    SUCCESS = 'POST_UPDATE_SUCCESS',
    FAILURE = 'POST_UPDATE_FAILURE',
}

export interface UpdatePostPayload extends CreateUserPayload {
    id: number;
}
