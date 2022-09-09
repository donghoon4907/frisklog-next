import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 3rem;
    background-color: ${(props) => props.theme.headerBgColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    flex-shrink: 0;
    z-index: 1000;
`;

export const HeaderBody = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    padding: 0 0.6rem;
    position: relative;
`;

export const HeaderColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    & > * {
        margin-right: 0.6rem;
    }

    & > *:nth-child(1) {
        margin-left: 0.6rem;
    }
`;
