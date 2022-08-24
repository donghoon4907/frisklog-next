import { all, fork, call } from "redux-saga/effects";

import { UserAction } from "../../actions/user/user.interface";

function createUserAPI(data) {
  return axios
    .post("", data)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

function* createUser(action: UserAction) {
  const response = yield call(createUserAPI, action.payload);
}

export function* userSaga() {
  yield all([fork(createUser)]);
}
