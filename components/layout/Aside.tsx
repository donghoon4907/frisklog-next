import { FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { AsideBody, AsideContainer } from './Aside.style';

interface Props extends DefaultProps {}

export const Aside: FC<Props> = ({ children }) => {
    return (
        <AsideContainer>
            <AsideBody>{children}</AsideBody>
        </AsideContainer>
    );
};
