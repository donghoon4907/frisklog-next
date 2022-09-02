import { forwardRef } from 'react';
import styled from 'styled-components';

import { DefaultProps, InputProps } from '../interfaces/default';
import { Label } from './Label';
import { Input } from './Input';

const FormInputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const FormInputBody = styled.div<{ expanded: boolean }>`
    position: relative;

    ${props => (props.expanded ? 'width: 100%;' : '')}
`;

interface Props extends DefaultProps, InputProps {
    label: string;
    expanded: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
    ({ children, expanded = false, ...props }, ref) => (
        <FormInputContainer>
            <FormInputBody expanded>
                <Label {...props} />
                <Input ref={ref} expanded {...props} />
            </FormInputBody>

            {children}
        </FormInputContainer>
    ),
);
