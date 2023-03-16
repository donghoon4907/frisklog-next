import { FC } from 'react';
import { CustomArrowProps } from 'react-slick';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import styled from 'styled-components';

import { mixinAlignIconCenter } from './theme/mixins';

const PrevArrowWrapper = styled.button`
    left: -20px;
    z-index: 2;

    ${mixinAlignIconCenter('rotate(180deg)')}

    ${({ theme }) => theme.breakPoints.xs} {
        display: none;
    }
`;

const NextArrowWrapper = styled.button`
    right: -20px;
    z-index: 2;

    ${mixinAlignIconCenter()}

    ${({ theme }) => theme.breakPoints.xs} {
        display: none;
    }
`;

export const PrevArrow: FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <PrevArrowWrapper
            type="button"
            aria-label="이전 컨텐츠 보기"
            onClick={onClick}
        >
            <MdOutlineDoubleArrow />
        </PrevArrowWrapper>
    );
};

export const NextArrow: FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <NextArrowWrapper
            type="button"
            aria-label="다음 컨텐츠 보기"
            onClick={onClick}
        >
            <MdOutlineDoubleArrow />
        </NextArrowWrapper>
    );
};
