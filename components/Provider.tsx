import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './globalstyles';

interface ProviderProps {
    children: JSX.Element;
}

const Provider: FC<ProviderProps> = ({ children }) => {
    const { mode } = useSelector((state: Record<string, any>) => state.theme);

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

export default Provider;
