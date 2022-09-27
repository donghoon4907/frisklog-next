import styled from 'styled-components';

import { mixinEllipsis } from './theme/mixins';

export const Container = styled.li`
    border-top: 1px solid ${({ theme }) => theme.dividerColor};
`;

export const Body = styled.div`
    position: relative;
    padding: 12px 23px 10px 0;
`;

export const AvatarWrapper = styled.div`
    position: absolute;
    top: 12px;
    left: 0;
    width: 36px;
    height: 36px;
`;

export const Meta = styled.div`
    padding-left: 46px;
`;

export const Nickname = styled.div`
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 700;
    overflow: hidden;
`;

export const Content = styled.p`
    position: relative;
    line-height: 1.5;
    font-size: 13px;

    ${mixinEllipsis}
`;

export const Date = styled.div`
    margin-top: 7px;
    font-size: 12px;
    line-height: 1;
    color: #979797;
`;

export const Extension = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
`;
