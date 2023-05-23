import type { FC } from 'react';
import { useEffect } from 'react';
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
import { NotificationButton } from '../button/Notification';
import { useLazyQuery } from '../../hooks/use-query';
import { searchKeywordsRequest } from '../../actions/search-keyword/search-keywords.action';

export const Header: FC = () => {
    // 인기 검색어 조회
    const [getSearchKeywords] = useLazyQuery(searchKeywordsRequest);

    const { isShowSearchBar } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    useEffect(() => {
        getSearchKeywords({
            limit: 5,
        });
    }, []);

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
                        <NotificationButton />
                        <ProfileButton />
                    </HeaderColumn>
                </HeaderBody>
                {isShowSearchBar && <HeaderSearchBar />}
            </HeaderContainer>
        </>
    );
};
