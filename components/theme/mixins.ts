import { css } from 'styled-components';

export const mixinBox = css`
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.boxBgColor};
    overflow: hidden;
`;

export const mixinCentered = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
