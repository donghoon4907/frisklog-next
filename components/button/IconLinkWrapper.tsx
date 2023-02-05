import { AnchorHTMLAttributes, FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { RelativeButtonWrapper } from './button.style';
import { ActiveLink } from '../ActiveLink';

interface Props extends DefaultProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

export const IconLinkWrapper: FC<Props> = ({ children, ...another }) => {
    return (
        <RelativeButtonWrapper>
            <ActiveLink {...another}>{children}</ActiveLink>
        </RelativeButtonWrapper>
    );
};
