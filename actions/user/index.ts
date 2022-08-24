import {
  UserAction,
  UserActionTypes,
  CreateUserPayload
} from "./user.interface";

export function requestCreate(payload: CreateUserPayload): UserAction {
  return {
    type: UserActionTypes.CREATE_REQUEST,
    payload
  };
}

export function sucessCreate(): UserAction {
  return {
    type: UserActionTypes.CREATE_SUCCESS
  };
}

export function failureCreate(error: string): UserAction {
  return {
    type: UserActionTypes.CREATE_FAILURE,
    error
  };
}
