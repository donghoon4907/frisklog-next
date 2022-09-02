import { Dispatch, SetStateAction } from 'react';

export enum CreateUserAction {
    REQUEST = 'USER_CREATE_REQUEST',
    SUCCESS = 'USER_CREATE_SUCCESS',
    FAILURE = 'USER_CREATE_FAILURE',
}

export interface CreateUserPayload {
    email: string;
    nickname: string;
    avatar?: string;
    callbackFunc: () => Dispatch<SetStateAction<string>>;
}
