import { AnchorHTMLAttributes, FC } from 'react';

import { ActiveLink } from './ActiveLink';
import { SquareAvatar } from './SquareAvatar';
import { UserStatusType } from '../types/status';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: UserStatusType; // 사용자 상태
}

export const LinkAvatar: FC<Props> = ({ src, alt, statusCode, ...another }) => (
    <ActiveLink {...another}>
        <SquareAvatar src={src} alt={alt} statusCode={statusCode} />
    </ActiveLink>
);
