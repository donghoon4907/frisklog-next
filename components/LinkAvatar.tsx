import { FC } from 'react';

import { ActiveLink } from './ActiveLink';
import { Avatar } from './Avatar';
import { TStatus } from '../types/status';

interface Props {
    href: string; // 링크 경로
    src: string; // 이미지 자원
    alt: string; // 이미지 대체자
    statusCode?: TStatus; // 사용자 상태
    ariaLabel: string;
    tabIndex?: string;
}

export const LinkAvatar: FC<Props> = ({
    href,
    src,
    alt,
    statusCode,
    ariaLabel,
    tabIndex,
}) => (
    <ActiveLink href={href} ariaLabel={ariaLabel} tabIndex={tabIndex}>
        <Avatar src={src} alt={alt} statusCode={statusCode} />
    </ActiveLink>
);
