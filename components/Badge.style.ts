import styled from 'styled-components';

import { UserStatusType } from '../types/status';

export const BadgeBody = styled.span<{ statusCode: UserStatusType }>`
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
