import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { watchUploadImage } from './upload-image';

axios.defaults.baseURL = process.env.BACKEND_HOST + '/v1';

export function* commonSaga() {
    yield all([fork(watchUploadImage)]);
}
