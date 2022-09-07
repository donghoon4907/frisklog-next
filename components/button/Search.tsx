import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { ICommonState } from '../../reducers/common';
import { IconWrapper } from './IconWrapper';
import {
    hideSearchBar,
    showSearchBar,
} from '../../actions/switch/search-bar.action';

export const SearchButton: FC = () => {
    const dispatch = useDispatch();

    const { isShowSearchBar } = useSelector<any, ICommonState>(
        (state) => state.common,
    );

    const handleClick = () => {
        const actionCreator = isShowSearchBar ? hideSearchBar : showSearchBar;

        dispatch(actionCreator());
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
