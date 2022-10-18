import { call, put, takeEvery } from 'redux-saga/effects';

import { safe } from '../../lib/error/safe';
import * as usersService from '../../services/usersService';
import {
    updateSettingActionTypes,
    updateSettingSuccess,
} from '../../actions/user/update-setting.action';
import { UpdateSettingRequestAction } from '../../actions/user/update-setting.interface';
import { setUser } from '../../actions/user/user.action';
import { mutationMiddleware } from '../../lib/generators/mutation-middleware';

function* updateSettingSaga(action: UpdateSettingRequestAction) {
    const { payload } = action;

    const { updateSetting } = yield call(usersService.updateSetting, payload);

    yield put(updateSettingSuccess());

    yield put(setUser(updateSetting));

    return null;
}

export function* watchUpdateSetting() {
    yield takeEvery(
        updateSettingActionTypes.REQUEST,
        mutationMiddleware(updateSettingSaga),
    );
}
