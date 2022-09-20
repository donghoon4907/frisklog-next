import { FC } from 'react';
import { AvatarShape, AvatarType } from '../types/avatar';

import { StatusType } from '../types/status';
import { AvatarBody, AvatarContainer, BadgeWrapper } from './Avatar.style';
import { Badge } from './Badge';

interface Props {
    type: AvatarType; // 아바타 타입
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: StatusType; // 사용자 상태
}

export const Avatar: FC<Props> = ({
    type = AvatarShape.SQUARE,
    src,
    alt,
    statusCode,
    isUpload,
}) => (
    <AvatarContainer>
        <AvatarBody type={type} src={src} alt={alt} aria-hidden="true" />
        {statusCode && (
            <BadgeWrapper>
                <Badge statusCode={statusCode} />
            </BadgeWrapper>
        )}
    </AvatarContainer>
);
