import { FC } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeModeAction } from '../../actions/switch/theme-mode';
import { setCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_THEME_KEY } from '../../lib/cookie/cookie.key';
import { IState } from '../../reducers';
import { ICommonState } from '../../reducers/common';

export const ModeButton: FC = () => {
    const dispatch = useDispatch();

    const { mode } = useSelector<IState, ICommonState>(state => state.common);

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
        <div title="모드 버튼">
            <button
                type="button"
                onClick={handleClick}
                aria-label={
                    mode === 'light'
                        ? '어두운 화면으로 변경'
                        : '밝은 화면으로 변경'
                }
            >
                {mode === 'light' ? <BsFillSunFill /> : <BsMoonStarsFill />}
            </button>
        </div>
    );
};
