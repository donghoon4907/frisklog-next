import styled from 'styled-components';

export const ReadonlyButtonContainer = styled.li`
    position: relative;
    overflow: hidden;
    list-style: none;
    display: inline-block;
`;

export const ReadonlyButtonBody = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.readOnlyBtnTextColor}; !important;
    background-color: ${({ theme }) => theme.readOnlyBtnColor};
    padding: 3px 15px 3px 15px;
    position: relative;
    transition: color 0.2s;
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 30px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px 10px 0;

    & svg {
        fill: ${({ theme }) => theme.readOnlyBtnTextColor};
        
    }
`;
