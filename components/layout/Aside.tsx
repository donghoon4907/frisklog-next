import type { FC } from 'react';
import styled from 'styled-components';

import type { DefaultProps } from '../../interfaces/default';

const Container = styled.div`
    position: sticky;
    top: 0;
    padding-left: 15px;
    padding-top: 24px;
    width: 380px;
    height: 500px;

    ${({ theme }) => theme.breakPoints.md} {
        position: relative !important;
        padding-left: 0 !important;
        order: 1;
        max-width: 590px;
        width: 100% !important;
        height: auto !important;
    }
`;

const Body = styled.aside`
    flex: 1;

    ${({ theme }) => theme.breakPoints.md} {
        margin-bottom: 20px;
    }
`;

interface Props extends DefaultProps {}

export const AsideLayout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <Body>{children}</Body>
        </Container>
    );
};
