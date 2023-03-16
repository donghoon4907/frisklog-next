import { call, put, takeLatest } from 'redux-saga/effects';

import * as photosService from '../../services/photosService';
import { ProfilePhotosRequestAction } from '../../actions/photo/profile-photos.interface';
import {
    profilePhotosActionTypes,
    profilePhotosSuccess,
} from '../../actions/photo/profile-photos.action';

function* profilePhotosSaga(action: ProfilePhotosRequestAction) {
    const { payload } = action;

    const { photos } = yield call(photosService.getPhotos, payload);

    yield put(
        profilePhotosSuccess({
            nodes: photos.nodes,
            pageInfo: photos.pageInfo,
        }),
    );
}

export function* watchProfilePhotos() {
    yield takeLatest(profilePhotosActionTypes.REQUEST, profilePhotosSaga);
}
