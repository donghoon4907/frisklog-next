import {
  UserAction,
  UserActionTypes,
  CreateUserPayload
} from "./user.interface";

export function requestCreateUser(payload: CreateUserPayload): UserAction {
  return {
    type: UserActionTypes.CREATE_REQUEST,
    payload
  };
}

export function sucessCreateUser(): UserAction {
  return {
    type: UserActionTypes.CREATE_SUCCESS
  };
}

export function failureCreateUser(error: string): UserAction {
  return {
    type: UserActionTypes.CREATE_FAILURE,
    error
  };
}
