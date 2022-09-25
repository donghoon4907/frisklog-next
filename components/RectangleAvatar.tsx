import { FC } from 'react';
import { AiFillPicture } from 'react-icons/ai';

import {
    AvatarContainer,
    RectangleBody,
    AvatarBackground,
} from './Avatar.style';

interface Props {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    showBg?: boolean; // 배경사용 유무
}

export const RectangleAvatar: FC<Props> = ({ src, alt, showBg = false }) => (
    <AvatarContainer>
        {src && (
            <RectangleBody
                src={src}
                alt={alt}
                aria-hidden="true"
                showBg={showBg}
            />
        )}
        {showBg && (
            <AvatarBackground>
                <AiFillPicture size={50} />
            </AvatarBackground>
        )}
    </AvatarContainer>
);
