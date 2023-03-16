import produce from 'immer';

import { Photo } from '../../interfaces/photo';
import { PhotoAction } from '../../actions/photo';
import { profilePhotosActionTypes } from '../../actions/photo/profile-photos.action';
import { ProfilePhotosSuccessAction } from '../../actions/photo/profile-photos.interface';
import { postPhotosActionTypes } from '../../actions/photo/post-photos.action';
import { PostPhotosSuccessAction } from '../../actions/photo/post-photos.interface';

export interface PhotoState {
    profilePhotos: Photo[];
    postPhotos: Photo[];
}

const initialState: PhotoState = {
    profilePhotos: [],
    postPhotos: [],
};

export default (state = initialState, action: PhotoAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case profilePhotosActionTypes.SUCCESS: {
                const { payload } = action as ProfilePhotosSuccessAction;

                draft.profilePhotos = draft.profilePhotos.concat(payload.nodes);
                break;
            }
            case postPhotosActionTypes.SUCCESS: {
                const { payload } = action as PostPhotosSuccessAction;

                draft.postPhotos = draft.postPhotos.concat(payload.nodes);
                break;
            }
            default: {
                return state;
            }
        }
    });
