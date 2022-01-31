import React from 'react'

import { Global, ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import { defaultTheme } from '../utils/emotion/theme'
import { globalStyles } from '../utils/emotion/styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global styles={globalStyles(defaultTheme)} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
