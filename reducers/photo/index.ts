import produce from 'immer';

import { Photo } from '../../interfaces/photo';
import { PhotoAction } from '../../actions/photo';
import { profilePhotosActionTypes } from '../../actions/photo/profile-photos.action';
import { ProfilePhotosSuccessAction } from '../../actions/photo/profile-photos.interface';
import { postPhotosActionTypes } from '../../actions/photo/post-photos.action';
import { PostPhotosSuccessAction } from '../../actions/photo/post-photos.interface';
import { deletePhotoActionTypes } from '../../actions/photo/delete-photo.action';
import { DeletePhotoSuccessAction } from '../../actions/photo/delete-photo.interface';
import { PhotoType } from '../../types/photo';

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

                draft.profilePhotos = payload.nodes;
                break;
            }
            case postPhotosActionTypes.SUCCESS: {
                const { payload } = action as PostPhotosSuccessAction;

                draft.postPhotos = draft.postPhotos.concat(payload.nodes);
                break;
            }
            case deletePhotoActionTypes.SUCCESS: {
                const { payload } = action as DeletePhotoSuccessAction;

                let findIndex = -1;
                if (payload.type === PhotoType.POST) {
                    findIndex = draft.postPhotos.findIndex(
                        (photo) => payload.id == photo.id,
                    );

                    if (findIndex !== -1) {
                        draft.postPhotos.splice(findIndex, 1);
                    }
                } else if (payload.type === PhotoType.PROFILE) {
                    findIndex = draft.profilePhotos.findIndex(
                        (photo) => payload.id == photo.id,
                    );

                    if (findIndex !== -1) {
                        draft.profilePhotos.splice(findIndex, 1);
                    }
                } else {
                    throw new Error(
                        'reducers/photo:deletePhotoAction - Unvalid Photo Type',
                    );
                }

                break;
            }
            default: {
                return state;
            }
        }
    });
