import {
    ThemeDarkModeAction,
    ThemeLightModeAction,
} from './theme-mode.interface';

const REQUEST_NAME = 'MODE';

export const themeModeActionTypes = {
    LIGHT: `SET_LIGHT_${REQUEST_NAME}`,
    DARK: `SET_DARK_${REQUEST_NAME}`,
};

export function setLightMode(): ThemeLightModeAction {
    return {
        type: themeModeActionTypes.LIGHT,
    };
}

export function setDarkMode(): ThemeDarkModeAction {
    return {
        type: themeModeActionTypes.DARK,
    };
}
