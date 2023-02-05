import { FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { ReadonlyButtonBody, ReadonlyButtonContainer } from './Readonly.style';

interface Props extends DefaultProps {
    text: string;
}

export const ReadonlyButton: FC<Props> = ({ children, text }) => (
    <ReadonlyButtonContainer>
        <ReadonlyButtonBody>
            <span>{text}</span>
            {children}
        </ReadonlyButtonBody>
    </ReadonlyButtonContainer>
);
