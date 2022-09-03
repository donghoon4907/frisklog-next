import { FC } from 'react';

import { InputProps } from '../interfaces/default';
import { FormCheckboxContainer } from './FormCheckbox.style';

interface Props extends InputProps {
    label?: string;
    checked: boolean;
}

export const FormCheckbox: FC<Props> = ({ label, id, ...props }) => (
    <FormCheckboxContainer isGap={!!label}>
        <input type="checkbox" id={id} {...props} />
        <label htmlFor={id}>{label}</label>
    </FormCheckboxContainer>
);
