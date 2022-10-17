import styled from 'styled-components';

import * as StyledSearchFollowing from '../aside/SearchFollowing.style';

export const Container = styled(StyledSearchFollowing.Container)``;

export const Header = styled(StyledSearchFollowing.Header)`
    justify-content: space-between;
`;

export const Filter = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding: 5px;
`;

export const Body = styled(StyledSearchFollowing.Body)`
    max-height: none !important;
`;

export const Footer = styled(StyledSearchFollowing.Footer)``;

export const Button = styled(StyledSearchFollowing.Button)``;

export const Empty = styled(StyledSearchFollowing.Empty)``;
