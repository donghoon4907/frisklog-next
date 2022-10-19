import styled from 'styled-components';

import { mixinBox } from '../../theme/mixins';
import * as StyledPost from '../../PostItem.style';

export const Container = styled.div`
    position: relative;
    margin-bottom: 5px;

    ${mixinBox}
`;

export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    margin-top: 16px;
    padding: 5px;

    & > div {
        flex: 1;
    }
`;

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(1) {
        flex: 1;
    }
`;

export const NicknameWrapper = styled(StyledPost.NameWrapper)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NicknameBody = styled(StyledPost.NameBody)``;
