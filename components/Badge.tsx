import type { FC } from 'react';
import styled from 'styled-components';

import { UserStatus } from '../types/status';

const Container = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Bg = styled.span<{ statusCode: UserStatus }>`
    display: inline-block;
    width: 100%;
    height: 100%;
    background: ${({ theme, statusCode }) => theme.statusColors[statusCode]};
`;

export const Text = styled.span`
    line-height: 1;
`;

interface Props {
    statusCode: UserStatus;
    statusText?: string;
}

export const Badge: FC<Props> = ({ statusCode, statusText }) => (
    <Container>
        <Bg statusCode={statusCode} />
        {statusText && <Text />}
    </Container>
);
