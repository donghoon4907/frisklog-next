import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBarAction } from '../../actions/switch/search-bar';
import { IState } from '../../reducers';
import { ICommonState } from '../../reducers/common';

export const SearchButton: FC = () => {
    const dispatch = useDispatch();

    const { isShowSearchBar } = useSelector<IState, ICommonState>(
        state => state.common,
    );

    const handleClick = () => {
        dispatch({
            type: isShowSearchBar ? SearchBarAction.HIDE : SearchBarAction.SHOW,
        });
    };

    return (
        <div title="검색 버튼">
            <button
                type="button"
                onClick={handleClick}
                aria-label={isShowSearchBar ? '검색바 닫기' : '검색바 열기'}
            >
                <BsSearch />
            </button>
        </div>
    );
};
