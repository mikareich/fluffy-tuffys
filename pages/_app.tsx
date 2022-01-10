import '../styles/index.css'

import React from 'react'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
