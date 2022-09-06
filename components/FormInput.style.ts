import styled from 'styled-components';

import { mixinBox } from './theme/mixins';

export const FormInputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const FormInputBody = styled.div<{ expanded: boolean }>`
    position: relative;

    ${(props) => (props.expanded ? 'width: 100%;' : '')}
`;

export const FormInputWithLeftBox = styled.ul`
    padding: 10px 0 0 10px;
    margin-left: 10px;
    flex: 1;
    overflow-y: auto !important;
    height: 100px;

    ${mixinBox}
`;
