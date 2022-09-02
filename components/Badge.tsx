import { FC } from 'react';
import styled from 'styled-components';

import { StatusType } from '../types/status';

export const BadgeBody = styled.span<{ statusCode: StatusType }>`
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;

    background-color: ${({ theme, statusCode }) =>
        theme.statusColors[statusCode]};
`;

export const BadgeText = styled.span`
    line-height: 1;
`;

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
