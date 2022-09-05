import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosError } from 'axios';

import {
    UploadImageAction,
    UploadImagePayload,
} from '../../actions/common/upload-image';
import { CommonAction } from '../../actions/common';

function uploadImageAPI(payload: UploadImagePayload) {
    return axios.post('/upload/image', payload.formData, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });
}

function* uploadImageSaga({ payload }: CommonAction): any {
    try {
        const { data } = yield call(uploadImageAPI, payload);

        yield put({
            type: UploadImageAction.SUCCESS,
        });

        payload.callbackFunc(data);
    } catch (e) {
        yield put({
            type: UploadImageAction.FAILURE,
            error: (e as AxiosError).response?.data,
        });
    }
}

export function* watchUploadImage() {
    yield takeEvery(UploadImageAction.REQUEST, uploadImageSaga);
}
