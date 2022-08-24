import { all, call } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";

axios.defaults.baseURL = process.env.BACKEND_GRAPHQL;

export default function*() {
  yield all([call(userSaga)]);
}
