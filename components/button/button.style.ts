import styled from 'styled-components';

import { mixinButtonAndText, mixinCentered } from '../theme/mixins';

export const ButtonBody = styled.button<{ disabled: boolean }>`
    display: block;
    width: 100%;
    line-height: 40px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight: 600;
    text-align: center;
    font-size: 1rem;
    padding: 0 10px;

    border-width: 1px;
    border-style: solid;

    &.disabled {
        opacity: 0.35;
    }

    &.primary {
        background-color: ${({ theme }) => theme.primaryBtnColor};
        border-color: ${({ theme }) => theme.primaryBtnColor};
        color: ${({ theme }) => theme.primaryBtnTextColor};
    }

    &.info {
        background-color: ${({ theme }) => theme.colors.info};
        border-color: ${({ theme }) => theme.colors.info};
        color: ${({ theme }) => theme.primaryBtnTextColor};
    }

    &.danger {
        background-color: ${({ theme }) => theme.colors.danger};
        border-color: ${({ theme }) => theme.colors.danger};
        color: ${({ theme }) => theme.colors.white_base};
    }

    &.warning {
        background-color: ${({ theme }) => theme.colors.warning};
        border-color: ${({ theme }) => theme.colors.warning};
        color: ${({ theme }) => theme.colors.black_base};
    }

    &.github {
        background-color: ${({ theme }) => theme.githubBgColor};
        border: 1px solid ${({ theme }) => theme.githubBgColor};
        color: ${({ theme }) => theme.githubTextColor};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        & > svg {
            fill: ${({ theme }) => theme.githubTextColor};
        }
    }

    &.naver {
        background-color: ${({ theme }) => theme.naverBgColor};
        border: 1px solid ${({ theme }) => theme.naverBgColor};
        color: ${({ theme }) => theme.naverTextColor};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        & > svg {
            fill: ${({ theme }) => theme.naverTextColor};
        }
    }

    &.google {
        background-color: ${({ theme }) => theme.colors.white_base};
        border: 1px solid #eaecef;
        color: ${({ theme }) => theme.colors.black_base};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`;

export const CenteredButton = styled.button`
    ${mixinCentered}
`;

export const RelativeButtonWrapper = styled.div`
    position: relative;
`;

export const ButtonAndTextWrapper = styled.div`
    ${mixinButtonAndText}

    & > span {
        font-size: 1.2rem;
        margin-left: 5px;
        line-height: 20px;
    }
`;
