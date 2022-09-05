import styled from 'styled-components';

export const FormCheckboxContainer = styled.div<{ isGap: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5;

    ${(props) => (props.isGap ? 'gap: 5px;' : '')}
`;
