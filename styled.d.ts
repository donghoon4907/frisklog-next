import 'styled-components';

declare module 'styled-components' {
    export interface SizeRule {
        xs?: string;
        sm: string;
        md: string;
        lg: string;
        xlg?: string;
        xxlg?: string;
        xxxlg?: string;
    }

    export interface FontSize extends SizeRule {
        titleSize: string;
    }

    export interface Padding extends SizeRule {}

    export interface Margin extends SizeRule {}

    export interface Colors {
        black_base: string;
        black_primary: string;
        black_secondary: string;
        gray_lv0: string;
        gray_lv1: string;
        gray_lv2: string;
        darkDividerColor: string;
        white_base: string;
        white_primary: string;
        white_secondary: string;
        divider: string;
        disabled: string;
        inactive: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        blue: string;
    }

    export interface StatusColors {
        [statusCode: string]: string;
    }

    export interface BreakPoints extends SizeRule {
        xs: string;
        wd: string;
    }

    export interface DefaultTheme {
        fontSize: FontSize;
        padding: Padding;
        margin: Margin;
        colors: Colors;
        statusColors: StatusColors;
        breakPoints: BreakPoints;
        bgColor: string;
        headerBgColor: string;
        boxBgColor: string;
        borderColor: string;
        inputBgColor: string;
        iconColor: string;
        hoverColor: string;
        textColor: string;
        dividerColor: string;
        primaryBtnColor: string;
        primaryBtnTextColor: string;
        secondaryBtnColor: string;
        secondaryBtnTextColor: string;
        modalBgColor: string;
        githubBgColor: string;
        githubTextColor: string;
        borderRadius: string;
        readOnlyBtnColor: string;
        readOnlyBtnTextColor: string;
        preColor: string;
        dropdownBgColor: string;
        postWidth: string;
    }
}
