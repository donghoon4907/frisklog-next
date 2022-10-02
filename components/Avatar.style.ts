import styled from 'styled-components';
import { mixinBox } from './theme/mixins';

export const AvatarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export const AvatarBody = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const SquareBody = styled(AvatarBody)`
    object-fit: cover;
`;

export const RectangleBody = styled(AvatarBody)<{ showBg: boolean }>`
    object-fit: contain;
    ${(props) =>
        props.showBg
            ? `
        &:hover {
            opacity: 0;
            cursor: pointer;
        }
    `
            : ''}
`;

export const UploadAvatarContainer = styled.button`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: default;
`;

export const AvatarBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.inputBgColor};
    cursor: pointer;

    & svg {
        fill: ${({ theme }) => theme.iconColor};
        width: 50px;
        height: 50px;
    }
`;

export const BadgeWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;
