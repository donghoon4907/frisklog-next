import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { HomeButton } from '../button/Home';
import { ModeButton } from '../button/Mode';
import { HeaderSearchBar } from './SearchBar';
import { SearchButton } from '../button/Search';
import { FavoriteButton } from '../button/Favorite';
import { CreatePostButton } from '../button/CreatePost';
import { ProfileButton } from '../button/Profile';
import { ICommonState } from '../../reducers/common';

const HeaderContainer = styled.div`
    height: 3rem;
    background-color: ${(props) => props.theme.headerBgColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
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

const HeaderColumn = styled.div`
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

export const Header: FC = () => {
    const { isShowSearchBar } = useSelector<any, ICommonState>(
        (state) => state.common,
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
                        <SearchButton />
                        <FavoriteButton />
                        <CreatePostButton />
                        <ProfileButton />
                    </HeaderColumn>
                </HeaderBody>
                {isShowSearchBar && <HeaderSearchBar />}
            </HeaderContainer>
        </>
    );
};
