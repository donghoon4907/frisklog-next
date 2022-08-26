import { call, put, takeEvery } from "redux-saga/effects";

import {
  failureCreateUser,
  sucessCreateUser
} from "../../actions/user/create-user";
import {
  UserActionTypes,
  UserAction,
  CreateUserPayload
} from "../../actions/user/user.interface";
import { client } from "../../graphql/client";
import { MUTATION_CREATE_USER } from "../../graphql/mutation/user/create-user";

function createUserAPI(payload: CreateUserPayload) {
  return client.request(MUTATION_CREATE_USER, payload);
}

function* createUserSaga(action: UserAction): any {
  try {
    yield call(createUserAPI, action.payload);

    yield put(sucessCreateUser());
  } catch (e) {
    yield put(failureCreateUser((e as Error).message));
  }
}
// 사용자 생성
export function* watchCreateUser() {
  yield takeEvery(UserActionTypes.CREATE_REQUEST, createUserSaga);
}
