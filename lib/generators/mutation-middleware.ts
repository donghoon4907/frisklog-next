import { AnyAction } from 'redux';
import { Saga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { sagaError } from '../../actions/error/error.action';
import { showLoginModal } from '../../actions/switch/login-modal.action';
import { initUser } from '../../actions/user/user.action';
import { deleteCookie } from '../cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../cookie/cookie.key';
import { getErrorPayload } from '../error/graphql-request';

export function mutationMiddleware(saga: any): Saga {
    return function* (action: AnyAction) {
        try {
            const { payload } = action;

            const data = yield call(saga, action);

            payload.callbackFunc?.(data);
        } catch (err) {
            const { message, statusCode } = getErrorPayload(err);

            yield put(sagaError({ message, statusCode }));

            if (statusCode === 401) {
                deleteCookie(COOKIE_TOKEN_KEY);

                yield put(initUser());

                yield put(showLoginModal());
            } else if (statusCode === 403) {
                alert(message);
            }
        }
    };
}
