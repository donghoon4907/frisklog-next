import { FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { LayoutContainer, LayoutBody } from './layout.style';

interface Props extends DefaultProps {}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <LayoutContainer id="main">
            <LayoutBody>{children}</LayoutBody>
        </LayoutContainer>
    );
};
