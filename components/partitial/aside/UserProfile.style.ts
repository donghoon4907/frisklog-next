import styled from 'styled-components';

import { mixinBox, mixinEllipsis } from '../../theme/mixins';

export const Container = styled.div`
    position: relative;
    margin-bottom: 5px;

    ${mixinBox}
`;

export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
    padding: 5px;

    & > div {
        flex: 1;
    }
`;

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(1) {
        flex: 1;
    }
`;

export const NicknameWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 1;
    flex-direction: row;
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    overflow: hidden;
`;

export const Nickname = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    line-height: 1.5;

    ${mixinEllipsis}
`;
