import { FC } from 'react';

import { StatusType } from '../types/status';
import { BadgeBody, BadgeText } from './Badge.style';

interface Props {
    statusCode: StatusType;
    statusText?: string;
}

export const Badge: FC<Props> = ({ statusCode, statusText }) => (
    <>
        <BadgeBody statusCode={statusCode} />
        {statusText && <BadgeText />}
    </>
);
