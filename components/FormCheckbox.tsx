import { FC } from 'react';
import styled from 'styled-components';

import { InputProps } from '../interfaces/default';

const FormCheckboxContainer = styled.div<{ isGap: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;

    ${props => (props.isGap ? 'gap: 5px;' : '')}
`;

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
