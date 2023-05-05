import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    background: inherit;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding: ${({ theme }) => theme.padding.md};

    position: absolute;
    top: calc(3rem - 3px);
    left: 0;
    width: 100%;
`;

export const SearchBarForm = styled.form`
    position: relative;
    margin: 0 auto;
    width: 33rem;
`;

export const SearchKeyword = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 33rem;
`;
