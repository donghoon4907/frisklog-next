import {
    UpdateSettingRequestAction,
    UpdateSettingRequestPayload,
    UpdateSettingSuccessAction,
} from './update-setting.interface';

const UPDATE_SETTING_KEY = 'UPDATE_SETTING';

export const updateSettingActionTypes = {
    REQUEST: `${UPDATE_SETTING_KEY}_REQUEST`,
    SUCCESS: `${UPDATE_SETTING_KEY}_SUCCESS`,
    FAILURE: `${UPDATE_SETTING_KEY}_FAILURE`,
};

export function updateSettingRequest(
    payload: UpdateSettingRequestPayload,
): UpdateSettingRequestAction {
    return {
        type: updateSettingActionTypes.REQUEST,
        payload,
    };
}

export function updateSettingSuccess(): UpdateSettingSuccessAction {
    return {
        type: updateSettingActionTypes.SUCCESS,
    };
}
