import { FC } from 'react';

import { CircleAvatarContainer, AvatarBody } from './Avatar.style';

interface Props {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
}

export const CircleAvatar: FC<Props> = ({ src, alt }) => (
    <CircleAvatarContainer>
        <AvatarBody src={src} alt={alt} aria-hidden="true" />
    </CircleAvatarContainer>
);
