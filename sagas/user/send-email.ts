import { call, put, takeEvery } from 'redux-saga/effects';

import {
    sendEmailActionTypes,
    sendEmailSuccess,
} from '../../actions/user/send-email.action';
import { SendEmailRequestAction } from '../../actions/user/send-email.interface';
import * as usersService from '../../services/usersService';
import { getErrorPayload } from '../../lib/error/graphql-request';

function* sendEmailSaga(action: SendEmailRequestAction) {
    let msg = '';

    try {
        yield call(usersService.sendEmail, action.payload);
    } catch (err) {
        const { message, statusCode } = getErrorPayload(err);

        if (statusCode === 403) {
            msg = message;
        }
    }

    yield put(sendEmailSuccess());

    action.payload.callbackFunc?.(msg);
}

export function* watchSendEmail() {
    yield takeEvery(sendEmailActionTypes.REQUEST, sendEmailSaga);
}
