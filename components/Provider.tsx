import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './theme/globalstyles';
import { DefaultProps } from '../interfaces/default';

interface Props extends DefaultProps {}

export const Providers: FC<Props> = ({ children }) => {
    const { mode } = useSelector((state: Record<string, any>) => state.common);

    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    );
};
