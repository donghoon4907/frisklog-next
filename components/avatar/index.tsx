import type { FC } from 'react';
import styled from 'styled-components';

import { UserStatus } from '../../types/status';
import { Badge } from '../Badge';

const Container = styled.div<{
    width: number;
    height: number;
    borderRadius: string;
}>`
    position: relative;
    overflow: hidden;

    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius};
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 3;
`;

const BadgeWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

interface Props {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: UserStatus; // 사용자 상태
    borderRadius: string;
    width: number;
    height: number;
}

export const Avatar: FC<Props> = ({ src, alt, statusCode, ...cssProps }) => (
    <Container {...cssProps}>
        <Image src={src} alt={alt} aria-hidden="true" />
        {statusCode && (
            <BadgeWrapper>
                <Badge statusCode={statusCode} />
            </BadgeWrapper>
        )}
    </Container>
);
