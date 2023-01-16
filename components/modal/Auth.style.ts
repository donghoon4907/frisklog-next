import styled from 'styled-components';

export const AnotherLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
`;
export const StateChanger = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.padding.xxxlg} 0;
`;

export const StateChangerLink = styled.span`
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
`;
