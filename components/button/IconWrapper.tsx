import { FC, MouseEvent } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { ButtonAndTextWrapper, CenteredButton } from './button.style';

interface Props extends DefaultProps {
    ariaLabel: string;
    onClick: (evt?: MouseEvent<HTMLButtonElement>) => void;
    text?: string;
}

export const IconWrapper: FC<Props> = ({ children, ariaLabel, onClick }) => {
    return (
        <div title={`${ariaLabel} 버튼`}>
            <CenteredButton
                type="button"
                aria-label={ariaLabel}
                onClick={onClick}
                className="icon-button"
            >
                {children}
            </CenteredButton>
        </div>
    );
};

export const IconAndTextWrapper: FC<Props> = ({
    children,
    ariaLabel,
    onClick,
    text,
}) => {
    return (
        <ButtonAndTextWrapper title={`${ariaLabel} 버튼`}>
            <CenteredButton
                type="button"
                aria-label={ariaLabel}
                onClick={onClick}
                className="icon-button"
            >
                {children}
            </CenteredButton>
            <span>{text}</span>
        </ButtonAndTextWrapper>
    );
};
