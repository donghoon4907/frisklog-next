import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBarAction } from '../../actions/switch/search-bar';
import { ICommonState } from '../../reducers/common';
import { IconWrapper } from './IconWrapper';

export const SearchButton: FC = () => {
    const dispatch = useDispatch();

    const { isShowSearchBar } = useSelector<any, ICommonState>(
        (state) => state.common,
    );

    const handleClick = () => {
        dispatch({
            type: isShowSearchBar ? SearchBarAction.HIDE : SearchBarAction.SHOW,
        });
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
