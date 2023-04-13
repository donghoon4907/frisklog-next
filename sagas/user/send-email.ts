import { call, put, takeEvery } from 'redux-saga/effects';

import {
    sendEmailActionTypes,
    sendEmailSuccess,
} from '../../actions/user/send-email.action';
import { SendEmailRequestAction } from '../../actions/user/send-email.interface';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import * as usersService from '../../services/usersService';

function* sendEmailSaga(action: SendEmailRequestAction) {
    yield call(usersService.sendEmail, action.payload);

    yield put(sendEmailSuccess());
}

export function* watchSendEmail() {
    yield takeEvery(
        sendEmailActionTypes.REQUEST,
        mutationMiddleware(sendEmailSaga),
    );
}
