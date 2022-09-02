import { FC } from 'react';
import styled from 'styled-components';

import { Header } from '../header';
import { DefaultProps } from '../../interfaces/default';
import { AuthModal } from '../modal/Auth';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`;

interface Props extends DefaultProps {}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            {children}
            <AuthModal />
        </LayoutContainer>
    );
};
