import { forwardRef } from 'react';

import { InputBody } from './Input.style';

interface Props {
    expanded: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
    <InputBody ref={ref} {...props} />
));
