import { SwitchAction } from '..';

export interface ThemeLightModeAction extends SwitchAction {}

export interface ThemeDarkModeAction extends SwitchAction {}

export type ThemeModeAction = ThemeLightModeAction | ThemeDarkModeAction;
