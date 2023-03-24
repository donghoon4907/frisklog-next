import { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';

import { Photo } from '../interfaces/photo';
import { CoreSetState } from '../types/core';
import { IconWrapper } from './button/IconWrapper';
import { useMutation } from '../hooks/use-mutation';
import { deletePhotoRequest } from '../actions/photo/delete-photo.action';
import { PhotoType } from '../types/photo';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100px;
    margin: 5px;
    border: 1px solid ${({ theme }) => theme.dividerColor};
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Delete = styled.div`
    position: absolute;
    bottom: 2px;
    right: 2px;
`;

interface Props extends Photo {
    setPhoto: CoreSetState<string>;
}

export const PhotoItem: FC<Props> = ({ id, src, setPhoto }) => {
    const [deletePhoto] = useMutation(deletePhotoRequest, { useAuth: true });

    const handleClickPhoto = () => {
        setPhoto(src);
    };

    const handleDelete = (evt: MouseEvent) => {
        evt.stopPropagation();

        const tf = confirm('선택한 사진을 삭제하시겠습니까?');

        if (tf) {
            deletePhoto({ id, type: PhotoType.PROFILE });
        }
    };

    return (
        <Container
            role="button"
            aria-label="선택한 사진 불러오기"
            onClick={handleClickPhoto}
        >
            <img src={src} alt="이전 업로드 사진" />
            <Delete>
                <IconWrapper type="button" onClick={handleDelete}>
                    <FaWindowClose />
                </IconWrapper>
            </Delete>
        </Container>
    );
};
