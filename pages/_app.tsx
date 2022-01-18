import '../styles/index.css'

import React from 'react'
import type { AppProps } from 'next/app'
import AppBar from '../components/AppBar'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className="w-screen min-h-screen bg-gray-50 flex flex-col">
    {/* NavBar */}
    <AppBar.Container type="navbar" fixed border>
      <AppBar.Logo />
      <AppBar.MenuItem href="/players">Spieler</AppBar.MenuItem>
      <AppBar.MenuItem href="/">Tasks</AppBar.MenuItem>
      <AppBar.MenuItem href="/">Waypoints</AppBar.MenuItem>
      <AppBar.MenuItem href="/">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
        Serverstatus
      </AppBar.MenuItem>
    </AppBar.Container>
    <div className="mb-auto">
      <Component {...pageProps} />
    </div>
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

export default App
