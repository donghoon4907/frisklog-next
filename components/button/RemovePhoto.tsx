import type { FC } from 'react';
import { BsTrash } from 'react-icons/bs';

import { IconWrapper } from './IconWrapper';
import { useMutation } from '../../hooks/use-mutation';
import { deletePhotoRequest } from '../../actions/photo/delete-photo.action';
import { PhotoType } from '../../types/photo';

interface Props {
    id: string;
}

export const RemovePhotoButton: FC<Props> = ({ id }) => {
    const [deletePhoto] = useMutation(deletePhotoRequest, {
        useAuth: true,
    });

    const handleClick = () => {
        const message = '선택한 사진을 삭제하시겠습니까?';

        const tf = confirm(message);

        if (tf) {
            deletePhoto({ id, type: PhotoType.PROFILE });
        }
    };

    return (
        <IconWrapper aria-label="사진 삭제" onClick={handleClick}>
            <BsTrash />
        </IconWrapper>
    );
};
