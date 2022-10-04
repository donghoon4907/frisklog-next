import styled from 'styled-components';

import { mixinBox } from '../../theme/mixins';

export const Container = styled.div`
    ${mixinBox}
`;

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding: 5px;
    gap: 5px;
`;

export const Body = styled.ul`
    display: flex;
    flex-direction: column;
    height: auto;
    max-height: 230px;
    padding: 5px;
    background-color: ${({ theme }) => theme.bgColor} !important;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid ${({ theme }) => theme.borderColor};
    padding: 5px;
`;

export const Input = styled.div`
    width: 250px;
`;

export const Button = styled.div`
    width: 90px;
`;

export const Empty = styled.li`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
