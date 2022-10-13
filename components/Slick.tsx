import { FC } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import styled from 'styled-components';

import { mixinAlignIconCenter } from './theme/mixins';
import { DefaultProps } from '../interfaces/default';

const PrevArrowWrapper = styled.button`
    left: -20px;
    z-index: 2;

    ${mixinAlignIconCenter('rotate(180deg)')}
`;

const NextArrowWrapper = styled.button`
    right: -20px;
    z-index: 2;

    ${mixinAlignIconCenter()}
`;

const PrevArrow: FC<CustomArrowProps> = ({ onClick }) => {
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

const NextArrow: FC<CustomArrowProps> = ({ onClick }) => {
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

interface Props extends DefaultProps {}

export const Slick: FC<Props> = ({ children }) => {
    const settings: Settings = {
        className: '',
        dots: true,
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return <Slider {...settings}>{children}</Slider>;
};
