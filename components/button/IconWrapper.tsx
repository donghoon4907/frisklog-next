import { FC, MouseEvent } from 'react';

import { DefaultProps } from '../../interfaces/default';

interface Props extends DefaultProps {
    ariaLabel: string;
    onClick: (evt?: MouseEvent<HTMLButtonElement>) => void;
}

export const IconWrapper: FC<Props> = ({ children, ariaLabel, onClick }) => {
    return (
        <div title={`${ariaLabel} 버튼`}>
            <button
                type="button"
                aria-label={ariaLabel}
                onClick={onClick}
                className="icon-button"
            >
                {children}
            </button>
        </div>
    );
};
