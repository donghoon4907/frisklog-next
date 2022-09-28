import { call, put } from 'redux-saga/effects';
import { sagaError } from '../../actions/error/error.action';
import { showLoginModal } from '../../actions/switch/login-modal.action';
import { initUser } from '../../actions/user/user.action';
import { deleteCookie } from '../cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../cookie/cookie.key';
import { getErrorPayload } from './graphql-request';

export const safe = (saga: any, ...args: any) =>
    function* (action: any) {
        try {
            yield call(saga, ...args, action);
        } catch (err) {
            console.log(err);
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
