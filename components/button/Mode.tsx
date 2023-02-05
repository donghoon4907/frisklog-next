import { FC } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import {
    setDarkMode,
    setLightMode,
} from '../../actions/switch/theme-mode.action';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_THEME_KEY } from '../../lib/cookie/cookie.key';
import { AppState } from '../../reducers';
import { CommonState } from '../../reducers/common';
import { ThemeMode } from '../../types/mode';
import { IconWrapper } from './IconWrapper';

export const ModeButton: FC = () => {
    const dispatch = useDispatch();

    const { mode } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const handleClick = () => {
        if (mode === ThemeMode.LIGHT) {
            dispatch(setDarkMode());

            setCookie(COOKIE_THEME_KEY, ThemeMode.DARK);
        } else {
            dispatch(setLightMode());

            setCookie(COOKIE_THEME_KEY, ThemeMode.LIGHT);
        }
    };

    return (
        <IconWrapper
            aria-label={`${
                mode === ThemeMode.LIGHT ? '어두운' : '밝은'
            } 화면으로 변경`}
            onClick={handleClick}
        >
            {mode === ThemeMode.LIGHT ? <BsFillSunFill /> : <BsMoonStarsFill />}
        </IconWrapper>
    );
};
