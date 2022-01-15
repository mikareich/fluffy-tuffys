import React from 'react'
import PlayerStats from './PlayerStats'

interface ContainerProps {
  withPlayerStats?: boolean
}

const Container: React.FC<ContainerProps> = ({ withPlayerStats, children }) => (
  <main className="container mx-auto pt-20 flex justify-around">
    <div className="prose">{children}</div>
    {withPlayerStats && <PlayerStats />}
  </main>
)

export default Container
