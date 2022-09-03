import { FC } from 'react';

import { Header } from '../header';
import { DefaultProps } from '../../interfaces/default';
import { AuthModal } from '../modal/Auth';
import { LayoutContainer } from './layout.style';

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
