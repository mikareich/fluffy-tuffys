import { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';

import { Global, ThemeProvider } from '@emotion/react';

import Layout from '../components/Layout';
import { Heading1 } from '../components/Typography';
import { globalStyles } from '../utils/emotion/styles';
import { defaultTheme } from '../utils/emotion/theme';
import { currentPageState } from '../utils/recoil';

function App({ Component, pageProps }: AppProps) {
  const page = useRecoilValue(currentPageState)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles(defaultTheme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

function AppWrapper({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <App Component={Component} pageProps={pageProps} router={router} />
    </RecoilRoot>
  )
}

export default AppWrapper
