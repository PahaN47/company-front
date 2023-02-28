import React from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles } from '~/globalStyles.style';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
