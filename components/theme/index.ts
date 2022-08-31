import {
    DefaultTheme,
    FontSize,
    Padding,
    Margin,
    BreakPoints,
    Colors,
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
    black_base: '#000',
    black_primary: '#121212',
    black_secondary: '#232323',
    white_base: '#fff',
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

export const theme = {
    fontSize,
    padding,
    margin,
    colors,
    breakPoints,
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
    btnColor: colors.blue,
    modalBgColor: colors.white_base,
};

export const darkTheme: DefaultTheme = {
    ...theme,
    bgColor: colors.black_primary,
    headerBgColor: colors.black_primary,
    boxBgColor: colors.black_secondary,
    borderColor: colors.black_secondary,
    inputBgColor: colors.black_secondary,
    iconColor: '#909090',
    hoverColor: '#f8f9fa',
    textColor: colors.white_base,
    dividerColor: colors.black_secondary,
    btnColor: '#f8f9fa',
    modalBgColor: colors.black_base,
};
