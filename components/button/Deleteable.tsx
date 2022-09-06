import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IconWrapper } from './IconWrapper';
import { ReadonlyButton } from './Readonly';

interface Props {
    content: string;
    ariaLabel: string;
    onClick: (content: string) => void;
}

export const DeleteableButton: FC<Props> = ({
    content,
    ariaLabel,
    onClick,
}) => (
    <ReadonlyButton content={content}>
        <IconWrapper ariaLabel={ariaLabel} onClick={() => onClick(content)}>
            <IoMdClose />
        </IconWrapper>
    </ReadonlyButton>
);
