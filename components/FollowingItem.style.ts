import styled from 'styled-components';

import { mixinBox, mixinEllipsis } from './theme/mixins';

export const Container = styled.li`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 5px;
    }

    ${mixinBox}
`;

export const Link = styled.div<{ isActive: boolean }>`
    display: flex;
    flex: 1;

    ${({ theme, isActive }) =>
        isActive
            ? `
    background-color: ${theme.bgColor}  !important;
    `
            : 'inherit'};

    & > a {
        display: flex;
        flex: 1;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`;

export const Avatar = styled.div`
    width: 50px;
    height: 50px;
`;

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 10px;
`;

export const Name = styled.div`
    font-size: 1.2rem;
    margin-bottom: 5px;
    line-height: 1.5;
    font-weight: 700;

    ${mixinEllipsis}
`;

export const Description = styled.div`
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
`;

export const Toolbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    background-color: ${({ theme }) => theme.bgColor};
    padding: 5px;
    border-left: 1px solid ${({ theme }) => theme.borderColor};
`;
