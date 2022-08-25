import { all, call } from "redux-saga/effects";

import { userSaga } from "./user";

export function* rootSaga() {
  yield all([call(userSaga)]);
}
