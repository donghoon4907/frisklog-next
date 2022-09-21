import { FC } from 'react';

import { UserStatusType } from '../types/status';
import { BadgeBody, BadgeText } from './Badge.style';

interface Props {
    statusCode: UserStatusType;
    statusText?: string;
}

export const Badge: FC<Props> = ({ statusCode, statusText }) => (
    <>
        <BadgeBody statusCode={statusCode} />
        {statusText && <BadgeText />}
    </>
);
