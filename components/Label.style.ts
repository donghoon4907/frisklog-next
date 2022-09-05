import styled from 'styled-components';

export const LabelBody = styled.label<{ isEmpty: boolean }>`
    position: absolute;
    line-height: 12px;
    top: 2px;
    left: 5px;
    font-size: 0.1rem;
    animation: opacity 2s slidein;
    z-index: 100;
    opacity: ${(props) => (props.isEmpty ? 0 : 0.5)};
`;
