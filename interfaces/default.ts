import { ReactNode, ChangeEvent } from 'react';

export interface DefaultProps {
    children?: ReactNode;
}

export interface InputProps {
    id: string;
    value?: string;
    onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
}

export interface TextareaProps {
    id: string;
    value?: string;
    onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
}
