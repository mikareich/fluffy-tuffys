import '../styles/index.css'

import React from 'react'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Logo from '../components/NavBar/Logo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className="w-screen h-screen bg-gray-50">
    <NavBar.Container>
      <Logo />
      <NavBar.MenuItem href="/">Spieler</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Tasks</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Waypoints</NavBar.MenuItem>
      <NavBar.MenuItem href="/">Serverstatus</NavBar.MenuItem>
    </NavBar.Container>
    <Component {...pageProps} />
  </div>
)

export default MyApp
