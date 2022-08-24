import { Action } from "../actions.interface";

export enum UserActionTypes {
  CREATE_REQUEST = "USER_CREATE_REQUEST",
  CREATE_SUCCESS = "USER_CREATE_SUCCESS",
  CREATE_FAILURE = "USER_CREATE_FAILURE"
}

export interface CreateUserPayload {
  email: string;
  nickname: string;
  avatar?: string;
}

export type UserAction = Action<UserActionTypes>;
