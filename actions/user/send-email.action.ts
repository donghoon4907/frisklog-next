import {
    SendEmailRequestAction,
    SendEmailRequestPayload,
    SendEmailSuccessAction,
} from './send-email.interface';

export const SEND_EMAIL_KEY = 'SEND_EMAIL';

export const sendEmailActionTypes = {
    REQUEST: `${SEND_EMAIL_KEY}_REQUEST`,
    SUCCESS: `${SEND_EMAIL_KEY}_SUCCESS`,
    FAILURE: `${SEND_EMAIL_KEY}_FAILURE`,
};

export function sendEmailRequest(
    payload: SendEmailRequestPayload,
): SendEmailRequestAction {
    return {
        type: sendEmailActionTypes.REQUEST,
        payload,
    };
}

export function sendEmailSuccess(): SendEmailSuccessAction {
    return {
        type: sendEmailActionTypes.SUCCESS,
    };
}
