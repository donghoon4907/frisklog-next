import {
    ProfilePhotosRequestAction,
    ProfilePhotosRequestPayload,
    ProfilePhotosSuccessAction,
    ProfilePhotosSuccessPayload,
} from './profile-photos.interface';

export const PROFILE_PHOTOS_KEY = 'PROFILE_PHOTOS';

export const profilePhotosActionTypes = {
    REQUEST: `${PROFILE_PHOTOS_KEY}_REQUEST`,
    SUCCESS: `${PROFILE_PHOTOS_KEY}_SUCCESS`,
    FAILURE: `${PROFILE_PHOTOS_KEY}_FAILURE`,
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
