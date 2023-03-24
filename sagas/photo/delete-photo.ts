import { call, put, takeEvery } from 'redux-saga/effects';

import * as photosService from '../../services/photosService';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';
import { DeletePhotoRequestAction } from '../../actions/photo/delete-photo.interface';
import {
    deletePhotoActionTypes,
    deletePhotoSuccess,
} from '../../actions/photo/delete-photo.action';

function* deletePhotoSaga(action: DeletePhotoRequestAction) {
    const { payload } = action;

    yield call(photosService.deletePhoto, payload);

    yield put(deletePhotoSuccess(payload));

    return null;
}

export function* watchDeletePhoto() {
    yield takeEvery(
        deletePhotoActionTypes.REQUEST,
        mutationMiddleware(deletePhotoSaga),
    );
}
