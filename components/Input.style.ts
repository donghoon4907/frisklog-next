import styled from 'styled-components';

export const InputBody = styled.input<{ expanded: boolean }>`
    border: 0;
    border: 1px solid ${({ theme }) => theme.dividerColor};
    background-color: ${({ theme }) => theme.inputBgColor};
    color: inherit;
    height: 3rem;
    padding: 0 ${({ theme }) => theme.padding.xxlg} !important;
    font-size: 1rem;
    border-radius: 5px;
    line-height: 1.5;

    ${(props) => (props.expanded ? 'width: 100%;padding-top: 5px;' : '')}

    &:focus {
        outline: none;
    }
`;
