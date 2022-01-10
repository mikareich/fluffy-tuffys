import React from 'react'
import Link from './Link'

function NavBar() {
  return (
    <nav>
      <Link href="/">Fluffy Tuffys</Link>
      <Link href="/">Spieler</Link>
      <Link href="/">Tasks</Link>
      <Link href="/">Waypoints</Link>
      <Link href="/">Serverstatus</Link>
    </nav>
  )
}

export default NavBar
