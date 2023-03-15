import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { watchUploadImage } from './upload-image';
import { getCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';

axios.defaults.baseURL = process.env.BACKEND_HOST + '/v1';

if (typeof window !== 'undefined') {
    const token = getCookie(COOKIE_TOKEN_KEY);

    if (token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    } else {
        axios.defaults.headers.common['authorization'] = 'Non-login';
    }
}

export function* commonSaga() {
    yield all([fork(watchUploadImage)]);
}
