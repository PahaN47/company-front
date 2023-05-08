import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import { GlobalStyles } from '../src/globalStyles.style';
import { Provider } from 'react-redux';
import store from '../src/store';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/const';

export const decorators = [
    (Story) => {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Story />
                </ThemeProvider>
            </Provider>
        );
    },
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    nextRouter: {
        Provider: RouterContext.Provider,
    },
};
