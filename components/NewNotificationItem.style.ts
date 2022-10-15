import styled from 'styled-components';

import * as StyledFollowingItem from './FollowingItem.style';

export const Container = styled(StyledFollowingItem.Container)``;

export const Link = styled(StyledFollowingItem.Link)``;

export const Body = styled(StyledFollowingItem.Body)`
    cursor: pointer;
    padding: ${({ theme }) => theme.padding.sm} !important;
`;

export const Avatar = styled(StyledFollowingItem.Avatar)``;

export const Meta = styled(StyledFollowingItem.Meta)`
    flex: 1;
`;

export const Name = styled(StyledFollowingItem.Name)``;

export const Description = styled(StyledFollowingItem.Description)``;

export const Toolbar = styled(StyledFollowingItem.Toolbar)`
    width: 30px !important;
`;
