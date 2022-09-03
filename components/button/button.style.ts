import styled from 'styled-components';

export const ButtonBody = styled.button<{ disabled: boolean }>`
    display: block;
    width: 100%;
    line-height: 30px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight: 600;
    text-align: center;
    font-size: 1rem;
    padding: 0 10px;
    cursor: pointer;

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
        background-color: ${({ theme }) => theme.secondaryBtnColor};
        border-color: ${({ theme }) => theme.secondaryBtnColor};
        color: ${({ theme }) => theme.secondaryBtnTextColor};
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
`;
