import type { FC } from 'react';
import styled from 'styled-components';

import type { Photo } from '../../interfaces/photo';
import type { CoreSetState } from '../../types/core';
import { RemovePhotoButton } from '../button/RemovePhoto';

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
    background-color: ${({ theme }) => theme.bgColor};
`;

const Image = styled.img<{ isActive?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% ${({ isActive }) => (isActive ? '- 30px' : '')});
    height: 100%;
    object-fit: cover;
    z-index: 2;
`;

const Toolbar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    border-left: 1px solid ${({ theme }) => theme.dividerColor};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

interface Props extends Photo {
    setPhoto: CoreSetState<string>;
    isShowCheckbox?: boolean;
}

export const PhotoItem: FC<Props> = ({ id, src, setPhoto, isShowCheckbox }) => {
    const handleClickPhoto = () => {
        setPhoto(src);
    };

    return (
        <Container
            role="button"
            aria-label="선택한 사진 불러오기"
            onClick={handleClickPhoto}
        >
            <Image src={src} alt="업로드 사진" isActive={isShowCheckbox} />
            <Toolbar>
                <RemovePhotoButton id={id} />
            </Toolbar>
        </Container>
    );
};
