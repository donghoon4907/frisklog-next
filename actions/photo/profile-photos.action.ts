import {
    ProfilePhotosRequestAction,
    ProfilePhotosRequestPayload,
    ProfilePhotosSuccessAction,
    ProfilePhotosSuccessPayload,
} from './profile-photos.interface';

export const PROFILE_PHOTOS = 'PROFILE_PHOTOS';

export const profilePhotosActionTypes = {
    REQUEST: `${PROFILE_PHOTOS}_REQUEST`,
    SUCCESS: `${PROFILE_PHOTOS}_SUCCESS`,
    FAILURE: `${PROFILE_PHOTOS}_FAILURE`,
};

export function profilePhotosRequest(
    payload: ProfilePhotosRequestPayload,
): ProfilePhotosRequestAction {
    return {
        type: profilePhotosActionTypes.REQUEST,
        payload,
    };
}

export function profilePhotosSuccess(
    payload: ProfilePhotosSuccessPayload,
): ProfilePhotosSuccessAction {
    return {
        type: profilePhotosActionTypes.SUCCESS,
        payload,
    };
}
