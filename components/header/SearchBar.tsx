import { useRouter } from 'next/router';
import { useState, useEffect, useRef, FC, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FormInput } from '../FormInput';
import { SearchBarAction } from '../../actions/switch/search-bar';

const SearchBarContainer = styled.div`
    background: inherit;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding: ${({ theme }) => theme.padding.md};

    position: absolute;
    top: calc(3rem - 3px);
    left: 0;
    width: 100%;
`;

const SearchBarForm = styled.form`
    position: relative;
    margin: 0 auto;
    width: 33rem;
`;

export const HeaderSearchBar: FC = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    const [searchKeyword, setSearchKeyword] = useState('');

    const $searchInput = useRef<HTMLInputElement>(null);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(evt.target.value);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        router.push(`/search/${searchKeyword}`);

        dispatch({
            type: SearchBarAction.HIDE,
        });
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
