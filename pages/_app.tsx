import React from 'react'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
