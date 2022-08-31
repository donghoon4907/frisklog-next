import { forwardRef } from 'react';
import styled from 'styled-components';

const InputBody = styled.input<{ expanded: boolean }>`
    border: 0;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: $fr-border-radius;
    background-color: ${({ theme }) => theme.inputBgColor};
    color: inherit;
    height: 2.3rem;
    padding: 0 ${({ theme }) => theme.padding.xxlg};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.5;

    ${props => (props.expanded ? 'width: 100%;' : '')}

    &:focus {
        outline: none;
    }
`;

interface Props {
    expanded: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
    <InputBody ref={ref} {...props} />
));
