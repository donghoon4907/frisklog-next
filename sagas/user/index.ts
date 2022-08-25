import { all, fork } from "redux-saga/effects";

import { watchCreateUser } from "./create-user";

export function* userSaga() {
  yield all([fork(watchCreateUser)]);
}
