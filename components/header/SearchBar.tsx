import { useState, useEffect, useRef, FC, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { FormInput } from '../FormInput';
import { hideSearchBar } from '../../actions/switch/search-bar.action';
import { SearchBarContainer, SearchBarForm } from './SearchBar.style';
import { useRoute } from '../../hooks/use-route';

export const HeaderSearchBar: FC = () => {
    const route = useRoute();

    const dispatch = useDispatch();

    const [searchKeyword, setSearchKeyword] = useState('');

    const $searchInput = useRef<HTMLInputElement>(null);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        route.move(`/search/${searchKeyword}`);

        dispatch(hideSearchBar());
    };

    useEffect(() => {
        $searchInput.current?.focus();
    }, [$searchInput]);

    return (
        <SearchBarContainer>
            <SearchBarForm onSubmit={handleSubmit}>
                <FormInput
                    id="search"
                    label="검색어"
                    placeholder="검색어를 입력하세요"
                    autoComplete="off"
                    required
                    expanded
                    ref={$searchInput}
                    onChange={handleChange}
                    value={searchKeyword}
                />
            </SearchBarForm>
        </SearchBarContainer>
    );
};
