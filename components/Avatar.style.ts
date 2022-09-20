import styled from 'styled-components';

import { AvatarType, AvatarShape } from '../types/avatar';

export const AvatarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export const AvatarBody = styled.img<{ type: AvatarType }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    ${(props) =>
        props.type === AvatarShape.SQUARE
            ? 'height: 100%;object-fit: cover;'
            : ''}
`;

export const BadgeWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;
