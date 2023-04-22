import type { FC } from 'react';
import styled from 'styled-components';

import type { DefaultProps } from '../../interfaces/default';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 14px;
    padding-top: 24px;
    width: 100%;
    max-width: 590px;

    ${({ theme }) => theme.breakPoints.md} {
        padding: 0 !important;
        order: 2;
    }
`;

const Body = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-anchor: none;
    overflow: hidden;
    position: relative;
`;

export const MainTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 5px;
    overflow: hidden;
    color: inherit;
`;

interface Props extends DefaultProps {}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <Body>{children}</Body>
        </Container>
    );
};
