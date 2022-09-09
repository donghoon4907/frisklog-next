import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './theme/globalstyles';
import { DefaultProps } from '../interfaces/default';
import { CommonState } from '../reducers/common';
import { AppState } from '../reducers';
import { ThemeMode } from '../types/mode';

interface Props extends DefaultProps {}

export const Providers: FC<Props> = ({ children }) => {
    const { mode } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const theme = mode === ThemeMode.LIGHT ? lightTheme : darkTheme;

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </>
    );
};
