import { FC } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeModeAction } from '../../actions/switch/theme-mode';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_THEME_KEY } from '../../lib/cookie/cookie.key';
import { ICommonState } from '../../reducers/common';
import { IconWrapper } from './IconWrapper';

export const ModeButton: FC = () => {
    const dispatch = useDispatch();

    const { mode } = useSelector<any, ICommonState>((state) => state.common);

    const handleClick = () => {
        if (mode === 'light') {
            dispatch({
                type: ThemeModeAction.DARK,
            });

            setCookie(COOKIE_THEME_KEY, 'dark');
        } else {
            dispatch({
                type: ThemeModeAction.LIGHT,
            });

            setCookie(COOKIE_THEME_KEY, 'light');
        }
    };

    return (
        <IconWrapper
            ariaLabel={
                mode === 'light' ? '어두운 화면으로 변경' : '밝은 화면으로 변경'
            }
            onClick={handleClick}
        >
            {mode === 'light' ? <BsFillSunFill /> : <BsMoonStarsFill />}
        </IconWrapper>
    );
};
