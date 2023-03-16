import { call, put, takeLatest } from 'redux-saga/effects';

import * as photosService from '../../services/photosService';
import { PostPhotosRequestAction } from '../../actions/photo/post-photos.interface';
import {
    postPhotosActionTypes,
    postPhotosSuccess,
} from '../../actions/photo/post-photos.action';

function* postPhotosSaga(action: PostPhotosRequestAction) {
    const { payload } = action;

    const { photos } = yield call(photosService.getPhotos, payload);

    yield put(
        postPhotosSuccess({
            nodes: photos.nodes,
            pageInfo: photos.pageInfo,
        }),
    );
}

export function* watchPostPhotos() {
    yield takeLatest(postPhotosActionTypes.REQUEST, postPhotosSaga);
}
