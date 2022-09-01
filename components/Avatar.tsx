import { FC } from 'react';
import styled from 'styled-components';

import { TStatus } from '../types/status';
import { Badge } from './Badge';

const AvatarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

const AvatarBody = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BadgeWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

interface Props {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: TStatus; // 사용자 상태
}

export const Avatar: FC<Props> = ({ src, alt, statusCode }) => (
    <AvatarContainer>
        <AvatarBody src={src} alt={alt} aria-hidden="true" />
        {statusCode && (
            <BadgeWrapper>
                <Badge statusCode={statusCode} />
            </BadgeWrapper>
        )}
    </AvatarContainer>
);
