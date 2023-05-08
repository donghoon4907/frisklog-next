import type { AnchorHTMLAttributes, FC } from 'react';

import { ActiveLink } from '../ActiveLink';
import { ReadonlyButtonBody, ReadonlyButtonContainer } from './Readonly.style';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
}

export const LinkButton: FC<Props> = ({ text, ...anchorProps }) => (
    <ReadonlyButtonContainer>
        <ReadonlyButtonBody>
            <ActiveLink {...anchorProps}>{text}</ActiveLink>
        </ReadonlyButtonBody>
    </ReadonlyButtonContainer>
);
