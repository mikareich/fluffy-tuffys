import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { darkTheme } from '../utils/emotion';
import GlobalStyle from '../utils/emotion/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
