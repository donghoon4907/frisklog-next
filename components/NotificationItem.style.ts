import styled from 'styled-components';

import { mixinBox } from './theme/mixins';

export const Container = styled.div<{ isActive: boolean }>`
    display: flex;
    height: 70px;
    margin: 0 auto;
    padding: 10px;
    cursor: pointer;

    ${mixinBox}

    & + & {
        margin-top: 5px;
    }

    ${({ theme, isActive }) =>
        isActive
            ? `
background-color: ${theme.bgColor}  !important;
`
            : 'inherit'};
`;

export const Header = styled.div`
    width: 50px;
`;

export const Strong = styled.span`
    font-weight: 700;
`;

export const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial,
        sans-serif;
    line-height: 1.5;
    margin-left: 5px;
`;

export const AvatarWrapper = styled.div`
    width: 100%;
    height: 50px;
`;
