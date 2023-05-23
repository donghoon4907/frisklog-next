import styled from 'styled-components';

import { mixinBox } from '../../theme/mixins';

export const Container = styled.ul`
    position: relative;

    ${mixinBox}
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
