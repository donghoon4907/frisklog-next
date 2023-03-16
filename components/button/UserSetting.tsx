import { FC } from 'react';

import { showUserModal } from '../../actions/switch/user-modal.action';
import { useDispatch } from 'react-redux';
import { Button } from '.';
import { useQuery } from '../../hooks/use-query';
import { profilePhotosRequest } from '../../actions/photo/profile-photos.action';
import { PhotoType } from '../../types/photo';

export const UserSettingButton: FC = () => {
    const dispatch = useDispatch();

    const [getPhotos] = useQuery(profilePhotosRequest);

    // 클릭 핸들러
    const handleClick = () => {
        getPhotos({ limit: 5, type: PhotoType.PROFILE });

        dispatch(showUserModal());
    };

    return (
        <Button type="button" colorType="primary" onClick={handleClick}>
            <span>사용자 설정</span>
        </Button>
    );
};
