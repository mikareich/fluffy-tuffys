import React from 'react'
import { Player } from '../utils/players'
import Avatar from './Avatar'
import Link from './Link'

interface PlayerStatsProps {
  players: Player[]
}

const PlayerStats: React.FC<PlayerStatsProps> = ({ players }) => (
  <div className="border rounded-lg h-min p-4 max-w-xs sticky top-32 w-64">
    <div className="prose mb-4">
      <h2 className="text-xl">Spieler Online</h2>
      <p className="text-gray-500">
        Alle Spieler, die gerade auf dem Server spielen.
      </p>
    </div>
    <ul>
      {players.map((player) => (
        <li key={player.uuid} className="mb-2 hover:bg-gray-200 rounded p-2">
          <Link href={`/players/${player.name}`} className="flex">
            <div className="grid place-items-center">
              <Avatar
                src={`https://crafatar.com/avatars/${player.uuid}`}
                size={32}
              />
            </div>
            <div className="ml-2">
              <span className="font-medium">{player.name}</span>
              <br />
              <span className="text-gray-500">
                {player.position.x}, {player.position.y}, {player.position.z}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default PlayerStats
