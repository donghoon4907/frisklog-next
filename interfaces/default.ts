import { ReactNode } from 'react';

export interface DefaultProps {
    children?: ReactNode;
}

export interface InputProps {
    id: string;
    value: string;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    onChange?: Function;
}
