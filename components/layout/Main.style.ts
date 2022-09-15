import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 14px;
    padding-top: 24px;
    width: 100%;
    max-width: 590px;

    ${({ theme }) => theme.breakPoints.md} {
        padding: 0 !important;
        order: 2;
    }
`;

export const MainBody = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-anchor: none;
    overflow: hidden;
    position: relative;
`;

export const MainTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 5px;
    overflow: hidden;
    color: inherit;
`;
