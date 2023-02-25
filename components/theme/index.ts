import {
    DefaultTheme,
    FontSize,
    Padding,
    Margin,
    BreakPoints,
    Colors,
    StatusColors,
} from 'styled-components';

const DEFAULT_FONTSIZE = 16;

const calcRem = (size: number) => `${size / DEFAULT_FONTSIZE}rem`;

const mediaQuery = (maxWidth: number) =>
    `@media only screen and (max-width: ${maxWidth}px)`;

const fontSize: FontSize = {
    sm: calcRem(14),
    md: calcRem(16),
    lg: calcRem(18),
    xlg: calcRem(20),
    xxlg: calcRem(22),
    xxxlg: calcRem(24),
    titleSize: calcRem(50),
};

const padding: Padding = {
    sm: calcRem(8),
    md: calcRem(10),
    lg: calcRem(12),
    xlg: calcRem(14),
    xxlg: calcRem(16),
    xxxlg: calcRem(18),
};

const margin: Margin = {
    sm: calcRem(8),
    md: calcRem(10),
    lg: calcRem(12),
    xlg: calcRem(14),
    xxlg: calcRem(16),
    xxxlg: calcRem(18),
};

const breakPoints: BreakPoints = {
    xs: mediaQuery(576),
    sm: mediaQuery(768),
    md: mediaQuery(992),
    lg: mediaQuery(1200),
    wd: mediaQuery(1500),
};

const colors: Colors = {
    black_base: 'black',
    black_primary: '#121212',
    black_secondary: '#232323',
    gray_lv0: '#1f1f1f',
    gray_lv1: '#28292a',
    gray_lv2: '#2d2f31',
    darkDividerColor: '#494c56',
    white_base: 'white',
    white_primary: '#f7f7f8',
    white_secondary: '#e6e6e6',
    divider: '#eaecef',
    disabled: '#646464',
    inactive: '#868e96',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    blue: '#2e6bd8',
};

const statusColors: StatusColors = {
    online: colors.success,
    offline: colors.danger,
    away: colors.disabled,
    busy: colors.warning,
};

export const theme = {
    fontSize,
    padding,
    margin,
    colors,
    statusColors,
    breakPoints,
    borderRadius: '4px',
    postWidth: '590px',
};

export const lightTheme: DefaultTheme = {
    ...theme,
    bgColor: colors.white_primary,
    headerBgColor: colors.white_base,
    boxBgColor: colors.white_base,
    borderColor: colors.white_secondary,
    inputBgColor: colors.white_base,
    iconColor: colors.blue,
    hoverColor: '#eee',
    textColor: colors.black_base,
    dividerColor: colors.divider,
    primaryBtnColor: colors.blue,
    primaryBtnTextColor: colors.white_base,
    secondaryBtnColor: colors.white_base,
    secondaryBtnTextColor: colors.black_base,
    modalBgColor: colors.white_base,
    githubBgColor: colors.black_base,
    githubTextColor: colors.white_base,
    readOnlyBtnColor: colors.blue,
    readOnlyBtnTextColor: colors.white_base,
    preColor: '#f4f7f8',
    dropdownBgColor: colors.white_base,
};

export const darkTheme: DefaultTheme = {
    ...theme,
    bgColor: colors.black_primary,
    headerBgColor: colors.gray_lv0,
    boxBgColor: colors.gray_lv0,
    borderColor: colors.gray_lv0,
    inputBgColor: '#121212',
    iconColor: '#909090',
    hoverColor: 'rgba(144, 144, 144, 0.5)',
    textColor: colors.white_base,
    dividerColor: colors.darkDividerColor,
    primaryBtnColor: '#f8f9fa',
    primaryBtnTextColor: colors.black_base,
    secondaryBtnColor: '3c3c3c',
    secondaryBtnTextColor: colors.black_base,
    modalBgColor: colors.gray_lv0,
    githubBgColor: colors.white_base,
    githubTextColor: colors.black_base,
    readOnlyBtnColor: colors.white_base,
    readOnlyBtnTextColor: colors.black_base,
    preColor: colors.black_secondary,
    dropdownBgColor: colors.gray_lv1,
};
