import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { CommonState } from '../../reducers/common';
import { IconWrapper } from './IconWrapper';
import {
    hideSearchBar,
    showSearchBar,
} from '../../actions/switch/search-bar.action';
import { AppState } from '../../reducers';

export const SearchButton: FC = () => {
    const dispatch = useDispatch();

    const { isShowSearchBar } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const handleClick = () => {
        if (isShowSearchBar) {
            dispatch(hideSearchBar());
        } else {
            dispatch(showSearchBar());
        }
    };

    return (
        <IconWrapper
            ariaLabel={isShowSearchBar ? '검색바 닫기' : '검색바 열기'}
            onClick={handleClick}
        >
            <BsSearch />
        </IconWrapper>
    );
};
