import { ButtonHTMLAttributes, FC } from 'react';

import { DefaultProps } from '../../interfaces/default';
import {
    RelativeButtonWrapper,
    ButtonAndTextWrapper,
    CenteredButton,
} from './button.style';

interface Props extends DefaultProps, ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export const IconWrapper: FC<Props> = ({
    children,
    type = 'button',
    ...another
}) => {
    return (
        <RelativeButtonWrapper>
            <CenteredButton type={type} className="active-icon" {...another}>
                {children}
            </CenteredButton>
        </RelativeButtonWrapper>
    );
};

export const IconAndTextWrapper: FC<Props> = ({
    children,
    type = 'button',
    text,
    ...another
}) => {
    return (
        <ButtonAndTextWrapper>
            <CenteredButton type={type} className="active-icon" {...another}>
                {children}
            </CenteredButton>
            {text && <span>{text}</span>}
        </ButtonAndTextWrapper>
    );
};
