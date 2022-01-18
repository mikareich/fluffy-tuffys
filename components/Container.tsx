import React from 'react'
import { Player } from '../utils/players'
import PlayerStats from './PlayerStats'

interface ContainerProps {
  players: Player[]
}

const Container: React.FC<ContainerProps> = ({ players, children }) => (
  <main className="container mx-auto pt-20 flex justify-around min-h-full">
    <div className="prose">{children}</div>
    <div className="w-fit">{players && <PlayerStats players={players} />}</div>
  </main>
)

export default Container
