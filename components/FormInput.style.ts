import styled from 'styled-components';

export const FormInputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const FormInputBody = styled.div<{ expanded: boolean }>`
    position: relative;

    ${props => (props.expanded ? 'width: 100%;' : '')}
`;
