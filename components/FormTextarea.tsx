import { forwardRef } from 'react';

import { DefaultProps, TextareaProps } from '../interfaces/default';
import { FormTextareaBody, FormTextareaContainer } from './FormTextarea.style';
import { Label } from './Label';

interface Props extends DefaultProps, TextareaProps {
    label: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, Props>(
    ({ children, ...props }, ref) => (
        <FormTextareaContainer>
            <Label {...props} />
            <FormTextareaBody ref={ref} {...props} />
            {children}
        </FormTextareaContainer>
    ),
);
