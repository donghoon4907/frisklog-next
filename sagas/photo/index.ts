import { all, fork } from 'redux-saga/effects';

import { watchPostPhotos } from './post-photos';
import { watchProfilePhotos } from './profile-photos';

export function* photoSaga() {
    yield all([fork(watchPostPhotos), fork(watchProfilePhotos)]);
}
