import { call, put, takeEvery } from 'redux-saga/effects';

import {
    updateUserActionTypes,
    updateUserSuccess,
} from '../../actions/user/update-user.action';
import { UpdateUserRequestAction } from '../../actions/user/update-user.interface';
import { initUser, setUser } from '../../actions/user/user.action';
import { updateClientHeader } from '../../graphql/client';
import { deleteCookie, setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';
import { UserStatus } from '../../types/status';

function* updateUserSaga(action: UpdateUserRequestAction) {
    const { payload } = action;

    const { updateUser } = yield call(usersService.updateUser, payload);

    const { token } = updateUser;

    yield put(updateUserSuccess());
    // 로그아웃, 추후 오프라인상태 변경 기능 추가시 로그아웃 사가 분리
    if (payload.status === UserStatus.OFFLINE) {
        yield put(initUser());

        deleteCookie(COOKIE_TOKEN_KEY);

        updateClientHeader({ token: null });
    } else {
        yield put(setUser(updateUser));

        setCookie(COOKIE_TOKEN_KEY, updateUser.token);

        updateClientHeader({ token });
    }

    payload.callbackFunc?.(null);
}

export function* watchUpdateUser() {
    yield takeEvery(updateUserActionTypes.REQUEST, safe(updateUserSaga));
}
