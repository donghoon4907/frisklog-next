import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosError } from 'axios';

import {
    UploadImageRequestAction,
    UploadImageRequestPayload,
} from '../../actions/upload/image.interface';
import {
    uploadImageActionTypes,
    uploadImageFailure,
    uploadImageSuccess,
} from '../../actions/upload/image.action';

function uploadImageAPI(payload: UploadImageRequestPayload) {
    return axios.post('/upload/image', payload.formData, {
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
    } catch (e) {
        yield put(
            uploadImageFailure((e as AxiosError).response?.data as string),
        );
    }
}

export function* watchUploadImage() {
    yield takeEvery(uploadImageActionTypes.REQUEST, uploadImageSaga);
}
