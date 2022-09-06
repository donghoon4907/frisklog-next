import { FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { ReadonlyButtonBody, ReadonlyButtonContainer } from './Readonly.style';

interface Props extends DefaultProps {
    content: string;
}

export const ReadonlyButton: FC<Props> = ({ children, content }) => (
    <ReadonlyButtonContainer>
        <ReadonlyButtonBody>
            <span>{content}</span>
            {children}
        </ReadonlyButtonBody>
    </ReadonlyButtonContainer>
);
