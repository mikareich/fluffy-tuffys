import '../styles/index.css'

import React from 'react'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Logo from '../components/NavBar/Logo'
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
    <div className="w-screen h-screen bg-gray-50">
      <NavBar.Container>
        <Logo />
        <NavBar.MenuItem href="/">Spieler</NavBar.MenuItem>
        <NavBar.MenuItem href="/">Tasks</NavBar.MenuItem>
        <NavBar.MenuItem href="/">Waypoints</NavBar.MenuItem>
        <NavBar.MenuItem href="/">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          Serverstatus
        </NavBar.MenuItem>
      </NavBar.Container>
      <Gallery paths={imagePaths} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
