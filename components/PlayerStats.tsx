import React from 'react'
import Link from './Link'

interface PlayerStatsProps {
  // players: { name: string; position: { x: number; y: number; z: number } }[]
}

const PlayerStats: React.FC<PlayerStatsProps> = () => {
  const players = [
    { name: 'CopiedByKakashi', position: { x: 627, y: 23, z: 85 } },
    { name: 'CopiedByNinja', position: { x: 843, y: 81, z: 29 } },
    { name: 'omupHD', position: { x: 21, y: 73, z: 475 } },
    { name: 'juliayuli', position: { x: 789, y: 78, z: 365 } },
  ]
  return (
    <div className="border rounded-lg h-min p-4 max-w-xs sticky top-32">
      <div className="prose mb-4">
        <h2 className="text-xl">Spieler Online</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <ul>
        {players.map((player) => (
          <li key={player.name} className="mb-2">
            <Link href="/">
              <span className="font-medium">{player.name}</span>
              <br />
              <span className="text-gray-500">
                {player.position.x} {player.position.y} {player.position.z}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerStats
