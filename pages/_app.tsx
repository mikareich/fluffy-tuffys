import '../styles/index.css'

import React from 'react'
import type { AppProps } from 'next/app'
import AppBar from '../components/AppBar'
import Gallery from '../components/Gallery'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const imagePaths = [
    '/server-image-1.png',
    '/server-image-2.png',
    '/server-image-3.png',
    '/server-image-4.png',
    '/server-image-5.png',
    '/server-image-6.png',
    '/server-image-7.png',
    '/server-image-8.png',
    '/server-image-9.png',
    '/server-image-10.png',
    '/server-image-11.png',
    '/server-image-12.png',
    '/server-image-13.png',
  ]

  return (
    <div className="w-screen h-min-screen bg-gray-50">
      {/* NavBar */}
      <AppBar.Container type="navbar">
        <AppBar.Logo />
        <AppBar.MenuItem href="/">Spieler</AppBar.MenuItem>
        <AppBar.MenuItem href="/">Tasks</AppBar.MenuItem>
        <AppBar.MenuItem href="/">Waypoints</AppBar.MenuItem>
        <AppBar.MenuItem href="/">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          Serverstatus
        </AppBar.MenuItem>
      </AppBar.Container>
      <Gallery paths={imagePaths} />
      <Component {...pageProps} />
      {/* Footer */}
      <AppBar.Container type="footer">
        <AppBar.MenuItem href="/">Spieler</AppBar.MenuItem>
        <AppBar.MenuItem href="/">Tasks</AppBar.MenuItem>
        <AppBar.MenuItem href="/">Waypoints</AppBar.MenuItem>
        <AppBar.MenuItem href="/">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          Serverstatus
        </AppBar.MenuItem>
      </AppBar.Container>
    </div>
  )
}

export default MyApp
