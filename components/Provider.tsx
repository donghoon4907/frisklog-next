import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './theme/globalstyles';
import { DefaultProps } from '../interfaces/default';
import { IState } from '../reducers';
import { ICommonState } from '../reducers/common';

interface Props extends DefaultProps {}

export const Providers: FC<Props> = ({ children }) => {
    const { mode } = useSelector<IState, ICommonState>((state) => state.common);

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
