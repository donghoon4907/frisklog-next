import type { FC, ChangeEvent, FormEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppState } from '../../reducers';
import type { SearchKeywordState } from '../../reducers/search-keyword';
import { FormInput } from '../FormInput';
import { hideSearchBar } from '../../actions/switch/search-bar.action';
import {
    SearchBarContainer,
    SearchBarForm,
    SearchKeyword,
} from './SearchBar.style';
import { useRoute } from '../../hooks/use-route';
import { MainTitle } from '../layout/Main.style';
import { LinkButton } from '../button/Link';

export const HeaderSearchBar: FC = () => {
    const route = useRoute();

    const dispatch = useDispatch();

    const { searchKeywords } = useSelector<AppState, SearchKeywordState>(
        (state) => state.searchKeyword,
    );

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
            {searchKeywords.length > 0 && (
                <SearchKeyword>
                    <MainTitle>인기 검색어</MainTitle>
                    <ul>
                        {searchKeywords.map(({ id, keyword }) => (
                            <LinkButton
                                key={`searchKeyword${id}`}
                                text={keyword}
                                href={`/search/${keyword}`}
                                aria-label={`'${keyword}' 검색`}
                            />
                        ))}
                    </ul>
                </SearchKeyword>
            )}
        </SearchBarContainer>
    );
};
