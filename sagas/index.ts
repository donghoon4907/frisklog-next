import { all, call, put } from 'redux-saga/effects';

import { userSaga } from './user';
import { postSaga } from './post';
import { commentSaga } from './comment';
import { commonSaga } from './common';
import { categorySaga } from './category';
import { getErrorPayload } from '../lib/error/graphql-request';
import { sagaError } from '../actions/error/error.action';
import { deleteCookie } from '../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { initUser } from '../actions/user/user.action';
import { showLoginModal } from '../actions/switch/login-modal.action';

export function* rootSaga() {
    yield all([
        call(userSaga),
        call(postSaga),
        call(commentSaga),
        call(commonSaga),
        call(categorySaga),
    ]);
}
