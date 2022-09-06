import { FC, MouseEvent } from 'react';

import { DefaultProps } from '../../interfaces/default';
import { CenteredButton } from './button.style';

interface Props extends DefaultProps {
    ariaLabel: string;
    onClick: (evt?: MouseEvent<HTMLButtonElement>) => void;
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
