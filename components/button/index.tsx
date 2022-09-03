import { FC, MouseEvent } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { ButtonColorType, ButtonType } from './button.interface';
import { ButtonBody } from './button.style';

interface Props extends DefaultProps {
    type?: ButtonType;
    colorType?: ButtonColorType;
    disabled?: boolean;
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<Props> = ({
    children,
    type = 'button',
    colorType = 'primary',
    disabled = false,
    onClick,
}) => (
    <ButtonBody
        type={type}
        className={`${colorType} ${disabled ? 'disabled' : ''}`}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </ButtonBody>
);
