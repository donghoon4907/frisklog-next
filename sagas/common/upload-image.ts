import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosError } from 'axios';

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
            sagaError({
                message: (e as AxiosError).response?.data as string,
                statusCode: -1,
            }),
        );
    }
}

export function* watchUploadImage() {
    yield takeEvery(uploadImageActionTypes.REQUEST, uploadImageSaga);
}
