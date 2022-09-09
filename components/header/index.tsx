import { FC } from 'react';
import { useSelector } from 'react-redux';

import { HomeButton } from '../button/Home';
import { ModeButton } from '../button/Mode';
import { HeaderSearchBar } from './SearchBar';
import { SearchButton } from '../button/Search';
import { FavoriteButton } from '../button/Favorite';
import { CreatePostButton } from '../button/CreatePost';
import { ProfileButton } from '../button/Profile';
import { CommonState } from '../../reducers/common';
import { AppState } from '../../reducers';
import { HeaderBody, HeaderColumn, HeaderContainer } from './header.style';

export const Header: FC = () => {
    const { isShowSearchBar } = useSelector<AppState, CommonState>(
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
