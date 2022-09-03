import { forwardRef } from 'react';

import { DefaultProps, InputProps } from '../interfaces/default';
import { Label } from './Label';
import { Input } from './Input';
import { FormInputBody, FormInputContainer } from './FormInput.style';

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
