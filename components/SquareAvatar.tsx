import { FC } from 'react';

import { UserStatusType } from '../types/status';
import { SquareBody, AvatarContainer, BadgeWrapper } from './Avatar.style';
import { Badge } from './Badge';

interface Props {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: UserStatusType; // 사용자 상태
}

export const SquareAvatar: FC<Props> = ({ src, alt, statusCode }) => (
    <AvatarContainer>
        <SquareBody src={src} alt={alt} aria-hidden="true" />
        {statusCode && (
            <BadgeWrapper>
                <Badge statusCode={statusCode} />
            </BadgeWrapper>
        )}
    </AvatarContainer>
);
