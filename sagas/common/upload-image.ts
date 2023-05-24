import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    UploadImageRequestAction,
    UploadImageRequestPayload,
} from '../../actions/upload/image.interface';
import {
    uploadImageActionTypes,
    uploadImageSuccess,
} from '../../actions/upload/image.action';
import { sagaError } from '../../actions/error/error.action';

function uploadImageAPI(payload: UploadImageRequestPayload) {
    return axios.post(`/upload/image?type=${payload.type}`, payload.formData, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
}

function* uploadImageSaga({ payload }: UploadImageRequestAction): any {
    try {
        const { data } = yield call(uploadImageAPI, payload);

        yield put(uploadImageSuccess(data));

        payload.callbackFunc?.(data);
    } catch (err: any) {
        const { data, status } = err?.response;

        if (status === 403) {
            yield put(sagaError({ message: data, statusCode: status }));

            alert(data);
        }
    }
}

export function* watchUploadImage() {
    yield takeEvery(uploadImageActionTypes.REQUEST, uploadImageSaga);
}
