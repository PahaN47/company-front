import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/const';
import { GlobalStyles } from '~/globalStyles.style';
import store from '~/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}
