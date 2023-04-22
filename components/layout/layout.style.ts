import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
`;

export const LayoutBody = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 990px;
    padding: 0 8px;
    width: 100%;

    ${({ theme }) => theme.breakPoints.md} {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
