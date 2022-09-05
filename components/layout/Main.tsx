import { FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { MainBody, MainContainer } from './Main.style';

interface Props extends DefaultProps {}

export const Main: FC<Props> = ({ children }) => {
    return (
        <MainContainer>
            <MainBody>{children}</MainBody>
        </MainContainer>
    );
};
