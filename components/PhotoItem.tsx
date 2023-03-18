import { FC } from 'react';
import styled from 'styled-components';

import { Photo } from '../interfaces/photo';
import { CoreSetState } from '../types/core';

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

interface Props extends Photo {
    setPhoto: CoreSetState<string>;
}

export const PhotoItem: FC<Props> = ({ src, setPhoto }) => {
    const handleClickPhoto = () => {
        setPhoto(src);
    };

    return (
        <Container
            role="button"
            aria-label="선택한 사진 불러오기"
            onClick={handleClickPhoto}
        >
            <img src={src} alt="이전 업로드 사진" />
        </Container>
    );
};
