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

    export interface BreakPoints extends SizeRule {
        xs: string;
        wd: string;
    }

    export interface DefaultTheme {
        fontSize: FontSize;
        padding: Padding;
        margin: Margin;
        colors: Colors;
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
        btnColor: string;
        modalBgColor: string;
    }
}
