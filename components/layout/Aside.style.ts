import styled from 'styled-components';

export const AsideContainer = styled.div`
    position: sticky;
    top: 0;
    padding-left: 15px;
    padding-top: 24px;
    width: 380px;
    height: 500px;

    ${({ theme }) => theme.breakPoints.md} {
        position: relative !important;
        padding-left: 0 !important;
        order: 1;
        max-width: 590px;
        width: 100% !important;
        height: auto !important;
    }
`;

export const AsideBody = styled.aside`
    flex: 1;

    ${({ theme }) => theme.breakPoints.md} {
        margin-bottom: 20px;
    }
`;
