import { ButtonHTMLAttributes, FC } from 'react';
import { IoMdClose } from 'react-icons/io';

import { IconWrapper } from './IconWrapper';
import { ReadonlyButton } from './Readonly';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onRemove: (content: string) => void;
}

export const DeleteableButton: FC<Props> = ({ text, onRemove, ...another }) => (
    <ReadonlyButton text={text}>
        <IconWrapper onClick={() => onRemove(text)} {...another}>
            <IoMdClose />
        </IconWrapper>
    </ReadonlyButton>
);
