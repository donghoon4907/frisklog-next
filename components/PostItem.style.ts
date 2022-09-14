import styled from 'styled-components';

import { mixinBox, mixinEllipsis } from './theme/mixins';

export const Container = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;
`;

export const Body = styled.article`
    ${mixinBox}

    line-height: 0;
    max-width: 590px;
    position: relative;
    width: 100%;
`;

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
`;

export const Writer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const HeaderMore = styled.div`
    & svg {
        width: 20px;
        height: 20px;
    }
`;

export const AvatarWrapper = styled.div`
    width: 32px;
    height: 32px;
`;

export const NameWrapper = styled.div`
    line-height: 1;
    flex-direction: row;
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    overflow: hidden;
`;

export const NameBody = styled.span`
    ${mixinEllipsis}

    margin-left: 10px;
    margin-right: 5px;
    line-height: 1.5;
`;

export const Content = styled.div`
    position: relative;
    height: 300px;
    overflow: hidden;
    height: auto;
`;

export const Footer = styled.footer`
    padding: 5px;
`;

export const Tag = styled.div`
    position: relative;
    font-weight: 700;
    word-break: break-word;
    line-height: 1.5;
    font-size: 1rem;

    & a {
        padding: 2px 6px 2px 0;
        color: ${({ theme }) => theme.textColor};
        display: inline-block;
    }
`;

export const More = styled.div`
    padding-top: 5px;
    border-top: 1px solid var(--frisklog-divider-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const Date = styled.div`
    flex: 1;
    text-align: right;
    line-height: 20px;
`;
