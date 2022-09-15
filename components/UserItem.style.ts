import styled from 'styled-components';

import { mixinBox, mixinEllipsis } from './theme/mixins';

export const Container = styled.div`
    display: flex;
    height: 110px;
    margin: 0 auto;
    padding: 1rem;

    ${mixinBox}

    ${({ theme }) => theme.breakPoints.md} {
        height: 150px;
    }
`;

export const Header = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

export const Nickname = styled.span`
    font-family: 'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial,
        sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    margin-right: 5px;

    ${mixinEllipsis};
`;

export const Body = styled.div`
    width: 80px;
`;

export const AvatarWrapper = styled.div`
    width: 100%;
    height: 80px;
`;
