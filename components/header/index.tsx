import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { HomeButton } from '../button/Home';
import { ModeButton } from '../button/Mode';
import { HeaderSearchBar } from './SearchBar';

const HeaderContainer = styled.div`
    height: 3rem;
    background-color: ${props => props.theme.headerBgColor};
    border-bottom: 1px solid ${props => props.theme.borderColor};
    flex-shrink: 0;
    z-index: 1000;
`;

const HeaderBody = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    padding: 0 0.6rem;
    position: relative;
`;

const HeaderColumn = styled.div``;

export const Header: FC = () => {
    const { isShowSearchBar } = useSelector(
        (state: Record<string, any>) => state.common,
    );

    return (
        <>
            <HeaderContainer>
                <HeaderBody>
                    <HeaderColumn>
                        <HomeButton />
                    </HeaderColumn>
                    <HeaderColumn>
                        <ModeButton />
                    </HeaderColumn>
                </HeaderBody>
                {isShowSearchBar && <HeaderSearchBar />}
            </HeaderContainer>
        </>
    );
};
